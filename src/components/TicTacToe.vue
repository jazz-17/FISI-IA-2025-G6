<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Loader } from "lucide-vue-next";
import { Switch } from "@/components/ui/switch"; // Import Switch
import GoBack from '@/components/ui/utils/GoBack.vue';

// --- Constants ---
const PLAYER_X = "X"; // Human (MAX)
const PLAYER_O = "O"; // AI (MIN)
const EMPTY_CELL = "";
let currentMoveNodesVisited = 0; // Renamed for clarity

const displayedNodesVisited = ref<number>(0); // <<< Initialize to 0
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];
const AI_THINKING_DELAY = 1000;

// --- Reactive State ---
const board = ref<string[]>(Array(9).fill(EMPTY_CELL));
const currentPlayer = ref<string>(PLAYER_X);
const winner = ref<string | null>(null);
const isAiEvaluating = ref<boolean>(false);
const aiEvaluations = ref<{ index: number; score: number }[]>([]);
const useAlphaBetaPruning = ref<boolean>(false); // <<< New state variable for toggling

// --- Computed Properties ---
const isGameOver = computed<boolean>(() => winner.value !== null);
const isBoardFull = computed<boolean>(() =>
  board.value.every((cell) => cell !== EMPTY_CELL)
);

const statusMessage = computed<string>(() => {
  // Add indication of which algo is running during thinking phase
  const algoName = useAlphaBetaPruning.value ? "(Alpha-Beta)" : "(Minimax)";
  if (isAiEvaluating.value) return `AI is thinking ${algoName}...`;
  if (winner.value === PLAYER_X) return "You win! (X)";
  if (winner.value === PLAYER_O) return "AI wins! (O)";
  if (winner.value === "Draw") return "It's a draw!";
  return `Your Turn (X)`;
});

// --- Game Logic Methods (makeMove, checkWinner remain the same) ---
const makeMove = (index: number): void => {
  if (
    isAiEvaluating.value ||
    isGameOver.value ||
    board.value[index] !== EMPTY_CELL ||
    currentPlayer.value !== PLAYER_X
  ) {
    return;
  }
  board.value[index] = PLAYER_X;
  if (checkWinner(board.value, PLAYER_X)) {
    winner.value = PLAYER_X;
  } else if (isBoardFull.value) {
    winner.value = "Draw";
  } else {
    currentPlayer.value = PLAYER_O;
  }
};

const checkWinner = (currentBoard: string[], player: string): boolean => {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => currentBoard[index] === player);
  });
};

const resetGame = (): void => {
  board.value = Array(9).fill(EMPTY_CELL);
  currentPlayer.value = PLAYER_X;
  winner.value = null;
  isAiEvaluating.value = false;
  aiEvaluations.value = [];
  currentMoveNodesVisited = 0; // Reset internal counter
  displayedNodesVisited.value = 0; // <<< Reset displayed counter
  // Keep the user's algorithm choice on reset
};

const getEvaluationScore = (index: number): number | null => {
  const evaluation = aiEvaluations.value.find((e) => e.index === index);
  return evaluation ? evaluation.score : null;
};

// --- AI Logic ---

watch(currentPlayer, (newPlayer) => {
  if (newPlayer === PLAYER_O && !isGameOver.value) {
    triggerAiMove();
  }
});

const triggerAiMove = (): void => {
  if (isGameOver.value) return;

  isAiEvaluating.value = true;
  aiEvaluations.value = [];
  currentMoveNodesVisited = 0; // Reset internal counter
  // Use a slight delay for UI update before heavy computation
  setTimeout(() => {
    // 1. Evaluate moves using the selected algorithm
    const possibleMoves = evaluateAllMoves(board.value);
    aiEvaluations.value = possibleMoves; // Store for display
    displayedNodesVisited.value = currentMoveNodesVisited; // <<< Reset displayed counter
    // 2. Find the *first* best move (deterministic)
    let bestScore = Infinity;
    let bestMoveIndex = -1; // Initialize with invalid index

    for (const move of possibleMoves) {
      // If this move is strictly better, update score and index
      if (move.score < bestScore) {
        bestScore = move.score;
        bestMoveIndex = move.index;
      }
      // If move.score === bestScore, we *don't* update, keeping the first index found
    }

    // Handle case where no valid moves were found (shouldn't happen in normal play)
    if (bestMoveIndex === -1) {
      if (possibleMoves.length > 0) {
        console.warn(
          "No move found strictly better than Infinity, picking first possible move as fallback."
        );
        bestMoveIndex = possibleMoves[0].index; // Fallback: pick the first available move
      } else {
        console.error("AI couldn't find any possible move.");
        isAiEvaluating.value = false; // Stop thinking
        return;
      }
    }

    // 3. Delay and make the move
    setTimeout(() => {
      // Make sure game didn't end while waiting
      if (isGameOver.value) {
        isAiEvaluating.value = false;
        aiEvaluations.value = [];
        return;
      }

      // Make the actual move
      board.value[bestMoveIndex] = PLAYER_O;

      // Clear evaluation state
      isAiEvaluating.value = false;
      aiEvaluations.value = [];

      // Check outcome
      if (checkWinner(board.value, PLAYER_O)) {
        winner.value = PLAYER_O;
      } else if (isBoardFull.value) {
        winner.value = "Draw";
      } else {
        // Switch back to Human's turn
        currentPlayer.value = PLAYER_X;
      }
    }, AI_THINKING_DELAY);
  }, 50); // Small delay before starting evaluation
};

// Evaluates moves, now conditionally calls the right minimax function
const evaluateAllMoves = (
  currentBoard: string[]
): { index: number; score: number }[] => {
  const evaluations: { index: number; score: number }[] = [];
  currentMoveNodesVisited = 0; // Ensure reset before evaluation loop

  for (let i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] === EMPTY_CELL) {
      const testBoard = [...currentBoard];
      testBoard[i] = PLAYER_O; // AI makes a hypothetical move

      let score: number;
      // <<< Conditionally call the chosen algorithm >>>
      if (useAlphaBetaPruning.value) {
        score = minimaxAlphaBeta(testBoard, 0, -Infinity, Infinity, true); // MAX's turn next
      } else {
        score = minimax(testBoard, 0, true); // MAX's turn next
      }

      evaluations.push({ index: i, score: score });
    }
  }
  return evaluations;
};

// --- Minimax Algorithm (Basic - No Pruning) ---
// Keep this function available
const minimax = (
  currentBoard: string[],
  depth: number,
  isMaximizingPlayer: boolean
): number => {
  currentMoveNodesVisited++; // Count nodes

  // Base Cases
  if (checkWinner(currentBoard, PLAYER_X)) return 10 - depth;
  if (checkWinner(currentBoard, PLAYER_O)) return -10 + depth;
  if (currentBoard.every((cell) => cell !== EMPTY_CELL)) return 0;

  // Recursive Step
  if (isMaximizingPlayer) {
    // MAX Player (X)
    let maxEval = -Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_X;
        let evalScore = minimax(nextBoard, depth + 1, false); // Switch player
        maxEval = Math.max(maxEval, evalScore);
      }
    }
    return maxEval;
  } else {
    // MIN Player (O)
    let minEval = Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_O;
        let evalScore = minimax(nextBoard, depth + 1, true); // Switch player
        minEval = Math.min(minEval, evalScore);
      }
    }
    return minEval;
  }
};

// --- Minimax Algorithm with Alpha-Beta Pruning ---
// Keep this function available
const minimaxAlphaBeta = (
  currentBoard: string[],
  depth: number,
  alpha: number,
  beta: number,
  isMaximizingPlayer: boolean
): number => {
  currentMoveNodesVisited++; // Count nodes

  // Base Cases
  if (checkWinner(currentBoard, PLAYER_X)) return 10 - depth;
  if (checkWinner(currentBoard, PLAYER_O)) return -10 + depth;
  if (currentBoard.every((cell) => cell !== EMPTY_CELL)) return 0;

  // Recursive Step
  if (isMaximizingPlayer) {
    // MAX Player (X)
    let maxEval = -Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_X;
        let evalScore = minimaxAlphaBeta(
          nextBoard,
          depth + 1,
          alpha,
          beta,
          false
        );
        maxEval = Math.max(maxEval, evalScore);
        alpha = Math.max(alpha, evalScore);
        if (beta <= alpha) {
          break; // Beta Pruning
        }
      }
    }
    return maxEval;
  } else {
    // MIN Player (O)
    let minEval = Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_O;
        let evalScore = minimaxAlphaBeta(
          nextBoard,
          depth + 1,
          alpha,
          beta,
          true
        );
        minEval = Math.min(minEval, evalScore);
        beta = Math.min(beta, evalScore);
        if (beta <= alpha) {
          break; // Alpha Pruning
        }
      }
    }
    return minEval;
  }
};
</script>
<template>
  <div class="flex grow">
    <div class="absolute p-6">
      <GoBack></GoBack>

    </div>
    <div class="grow flex flex-col justify-center p-6 text-center space-y-4 bg-stone-50 dark:bg-slate-900">
      <h1 class="text-4xl font-bold tracking-tight text-foreground dark:text-slate-100">
        Tic-Tac-Toe
      </h1>
      <!-- Subtitle updated slightly -->
      <h3 class="text-xl text-muted-foreground dark:text-slate-400">
        Algoritmo Minimax
      </h3>

      <!-- Status Message -->
      <div class="status text-lg block font-medium text-foreground dark:text-slate-200 min-h-[1.75rem]">
        <div class="flex justify-center items-center">
          {{ statusMessage }}
          <span v-show="isAiEvaluating" class="animate-spin ml-2">
            <Loader class="w-5 h-5" />
          </span>
        </div>
      </div>

      <!-- Board -->
      <div
        class="board grid grid-cols-3 gap-2 mx-auto w-64 h-64 md:w-80 md:h-80 p-2 border border-border dark:border-slate-700 rounded-lg dark:bg-slate-800/30 transition-opacity duration-300"
        :class="{
          'opacity-60': isGameOver,
          'cursor-default border-primary/50': isAiEvaluating,
        }">
        <div v-for="(cell, index) in board" :key="index"
          class="cell flex items-center justify-center aspect-square bg-background dark:bg-slate-800 border border-border dark:border-slate-700 rounded-md transition-colors duration-150 ease-in-out"
          :class="{
            'cursor-pointer hover:bg-muted/50 dark:hover:bg-slate-700/60':
              cell === '' && !isGameOver && !isAiEvaluating,
            'cursor-not-allowed': cell !== '' || isGameOver || isAiEvaluating,
          }" @click="makeMove(index)">
          <span v-if="isAiEvaluating && getEvaluationScore(index) !== null"
            class="ai-score text-xs font-mono text-muted-foreground dark:text-slate-400 opacity-90"
            :title="`Score: ${getEvaluationScore(index)}`">
            {{ getEvaluationScore(index) }}
          </span>
          <span v-else class="marker text-5xl md:text-6xl font-bold select-none" :class="[
            cell === 'X' ? 'text-blue-600 dark:text-blue-400' : '',
            cell === 'O' ? 'text-red-600 dark:text-red-400' : '',
          ]">
            {{ cell }}
          </span>
        </div>
      </div>

      <!-- Algorithm Toggle Switch -->
      <div class="flex items-center justify-center space-x-2"
        :class="{ 'opacity-50 cursor-not-allowed': isAiEvaluating }">
        <Switch id="alpha-beta-switch" v-model="useAlphaBetaPruning" :disabled="isAiEvaluating"
          aria-label="Toggle Alpha-Beta Pruning" />
        <label for="alpha-beta-switch" class="text-sm text-muted-foreground dark:text-slate-400"
          :class="{ 'cursor-not-allowed': isAiEvaluating }">
          Usar Optimización Alpha-Beta
        </label>
      </div>
      <p class="text-sm font-semibold text-muted-foreground dark:text-slate-500 mt-2">
        Nodos evaluados (último movimiento AI):
        <span class="font-bold">{{ displayedNodesVisited }}</span>
      </p>
      <!-- Reset Button & Node Count -->
      <div>
        <button @click="resetGame"
          class="reset-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background dark:ring-offset-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
          :disabled="isAiEvaluating">
          Reiniciar Juego
        </button>
      </div>
    </div>
  </div>
</template>
