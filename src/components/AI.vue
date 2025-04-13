<template>
  <!-- Main container: Centered, padded, max-width for readability -->
  <div class="grow   flex flex-col justify-center p-6 text-center space-y-6 bg-stone-100">
    <!-- Titles: Styled using text size, weight, and color utilities -->
    <h1 class="text-4xl font-bold tracking-tight text-foreground">
      Tic-Tac-Toe
    </h1>
    <h3 class="text-xl text-muted-foreground">Algoritmo Minimax</h3>
    <h2 class="text-2xl font-semibold text-primary">Eres 'X'</h2>

    <!-- Status Message: Slightly larger, emphasis color -->
    <div class="status text-lg block font-medium text-foreground min-h-[1.75rem] ">
      <!-- min-h to prevent layout shift -->
      <div class="flex justify-center items-center ">
        {{ statusMessage }}
        <span v-show="isAiEvaluating" class="animate-spin ml-2">

          <Loader></Loader>
        </span>
      </div>
      <div>
      </div>
    </div>


    <!-- Board: Grid layout, aspect ratio, borders, background, conditional styling -->
    <div
      class="board grid grid-cols-3 gap-2 mx-auto w-64 h-64 md:w-100 md:h-100 p-2 border border-border rounded-lg bg-muted/20 transition-opacity duration-300"
      :class="{
        'opacity-60': isGameOver, // Fade out when game over
        'cursor-default border-primary/50': isAiEvaluating, // Indicate thinking
      }">
      <!-- Cell: Flex center, aspect ratio, borders, background, hover, cursor -->
      <div v-for="(cell, index) in board" :key="index"
        class="cell flex items-center justify-center aspect-square bg-background border border-border rounded-md transition-colors duration-150 ease-in-out"
        :class="{
          'cursor-pointer hover:bg-muted/50': cell === '' && !isGameOver && !isAiEvaluating, // Hover effect only on playable cells
          '': cell !== '' || isGameOver || isAiEvaluating, // Non-clickable cursor
        }" @click="makeMove(index)">
        <!-- AI Evaluation Score: Small, muted color -->
        <span v-if="isAiEvaluating && getEvaluationScore(index) !== null"
          class="ai-score text-xs font-mono text-muted-foreground opacity-90"
          :title="`Minimax score: ${getEvaluationScore(index)}`">
          {{ getEvaluationScore(index) }}
        </span>

        <!-- Marker (X/O): Large, bold, distinct colors -->
        <span v-else class="marker text-5xl md:text-6xl font-bold select-none" :class="[
          cell === 'X' ? 'text-blue-600 dark:text-blue-400' : '', // Or 'text-primary' if defined
          cell === 'O' ? 'text-red-600 dark:text-red-400' : ''   // Or 'text-destructive' if defined
        ]">
          {{ cell }}
        </span>
      </div>
    </div>

    <div>
      <!-- Reset Button: Styled like a primary action button -->
      <button @click="resetGame"
        class="reset-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
        :disabled="isAiEvaluating">
        <!-- Standard button classes (similar to shadcn/vue Button) -->
        Reiniciar Juego
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Loader } from "lucide-vue-next";
// --- Constants ---
const PLAYER_X = "X"; // Human (MAX)
const PLAYER_O = "O"; // AI (MIN)
const EMPTY_CELL = "";
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
const AI_THINKING_DELAY = 2000; // milliseconds to show scores

// --- Reactive State ---
const board = ref(Array(9).fill(EMPTY_CELL));
const currentPlayer = ref(PLAYER_X);
const winner = ref(null); // null: ongoing, 'X': X wins, 'O': O wins, 'Draw': draw
const isAiEvaluating = ref(false); // Flag to indicate AI "thinking" phase
const aiEvaluations = ref([]); // Stores { index: number, score: number } for visualization

// --- Computed Properties ---
const isGameOver = computed(() => winner.value !== null);
const isBoardFull = computed(() =>
  board.value.every((cell) => cell !== EMPTY_CELL)
);

const statusMessage = computed(() => {
  if (isAiEvaluating.value) return "AI is thinking";
  if (winner.value === PLAYER_X) return "You win! (X)";
  if (winner.value === PLAYER_O) return "AI wins! (O)";
  if (winner.value === "Draw") return "It's a draw!";
  return `Your Turn (X)`; // Simplified since AI turn has its own message
});

// --- Game Logic Methods ---
const makeMove = (index) => {
  // Prevent human move during AI evaluation or if invalid
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
    // AI move triggerred by watcher
  }
};

const checkWinner = (currentBoard, player) => {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => currentBoard[index] === player);
  });
};

const resetGame = () => {
  board.value = Array(9).fill(EMPTY_CELL);
  currentPlayer.value = PLAYER_X;
  winner.value = null;
  isAiEvaluating.value = false;
  aiEvaluations.value = [];
};

// Helper to get evaluation score for a specific cell index
const getEvaluationScore = (index) => {
  const evaluation = aiEvaluations.value.find((e) => e.index === index);
  return evaluation ? evaluation.score : null;
};

// --- AI Logic (Minimax & Visualization) ---

// Watch for AI's turn
watch(currentPlayer, (newPlayer) => {
  if (newPlayer === PLAYER_O && !isGameOver.value) {
    // Start the AI move process (evaluation + actual move)
    triggerAiMove();
  }
});

const triggerAiMove = () => {
  if (isGameOver.value) return;

  isAiEvaluating.value = true;
  aiEvaluations.value = []; // Clear previous evaluations

  // 1. Evaluate all possible moves
  const possibleMoves = evaluateAllMoves(board.value);
  aiEvaluations.value = possibleMoves; // Store for display

  // 2. Find the best move among evaluations (O minimizes the score)
  let bestScore = Infinity;
  let bestMoveIndex = -1;
  for (const move of possibleMoves) {
    if (move.score < bestScore) {
      bestScore = move.score;
      bestMoveIndex = move.index;
    }
  }

  // Handle case where no moves are possible (shouldn't happen if !isGameOver)
  if (bestMoveIndex === -1 && possibleMoves.length > 0) {
    bestMoveIndex = possibleMoves[0].index; // Fallback, pick first available
  } else if (bestMoveIndex === -1) {
    console.error("AI couldn't find a move, but game not over?");
    isAiEvaluating.value = false; // Exit thinking state
    return;
  }

  // 3. Show evaluations for a delay, then make the move
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
};

// Evaluates all valid first-level moves for the AI ('O')
const evaluateAllMoves = (currentBoard) => {
  const evaluations = [];
  for (let i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] === EMPTY_CELL) {
      const testBoard = [...currentBoard];
      testBoard[i] = PLAYER_O;
      // Score is from the perspective of the *next* player (X - isMaximizing = true)
      let score = minimax(testBoard, 0, true);
      evaluations.push({ index: i, score: score });
      // No need to backtrack testBoard[i] = EMPTY_CELL; as minimax uses copies
    }
  }
  return evaluations;
};

// Minimax function - returns the best possible score for the *current player* given the board state
// isMaximizingPlayer: true if it's X's turn (MAX), false if it's O's turn (MIN)
// (Unchanged from previous version)
const minimax = (currentBoard, depth, isMaximizingPlayer) => {
  // --- Base Cases: Check for terminal states ---
  if (checkWinner(currentBoard, PLAYER_X)) return 10; // Max wins
  if (checkWinner(currentBoard, PLAYER_O)) return -10; // Min wins
  if (currentBoard.every((cell) => cell !== EMPTY_CELL)) return 0; // Draw

  // --- Recursive Step ---
  if (isMaximizingPlayer) {
    // MAX Player (X) wants to maximize the score
    let bestScore = -Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_X;
        let score = minimax(nextBoard, depth + 1, false);
        bestScore = Math.max(score, bestScore);
        // No backtrack needed here as nextBoard is a copy
      }
    }
    return bestScore;
  } else {
    // MIN Player (O) wants to minimize the score
    let bestScore = Infinity;
    for (let i = 0; i < currentBoard.length; i++) {
      if (currentBoard[i] === EMPTY_CELL) {
        const nextBoard = [...currentBoard];
        nextBoard[i] = PLAYER_O;
        let score = minimax(nextBoard, depth + 1, true);
        bestScore = Math.min(score, bestScore);
        // No backtrack needed here as nextBoard is a copy
      }
    }
    return bestScore;
  }
};
</script>
