interface PrologContent {
  title: string;
  description: string;
  initialProgram: string;
  sampleQueries?: string[];
  sourceCodeUrl?: string;
  imageUrl?: string;
}
const homeworkContent: Record<string, Record<string, PrologContent>> = {
  "4": {
    "tres-en-raya": {
      title: "Tres en Raya con Prolog",
      description:
        "Implementación del juego Tres en Raya usando programación lógica",
      initialProgram: `% Tres en Raya - Tablero y movimientos
% Representación del tablero como lista de 9 posiciones
% 1-9 para posiciones vacías, x/o para jugadores

% Ejemplo de tablero inicial
tablero_inicial([1,2,3,4,5,6,7,8,9]).

% Mostrar tablero con write()
mostrar_tablero([A,B,C,D,E,F,G,H,I]) :-
    write('Tablero actual:'), nl,
    write(' '), write(A), write(' | '), write(B), write(' | '), write(C), nl,
    write('-----------'), nl,
    write(' '), write(D), write(' | '), write(E), write(' | '), write(F), nl,
    write('-----------'), nl,
    write(' '), write(G), write(' | '), write(H), write(' | '), write(I), nl.

% Hacer un movimiento
hacer_movimiento(Pos, Jugador, TableroAntes, TableroDespues) :-
    nth1(Pos, TableroAntes, Pos),  % Posición debe estar vacía
    nth1(Pos, TableroDespues, Jugador),  % Colocar jugador
    replace_nth1(Pos, TableroAntes, Jugador, TableroDespues).

% Verificar victoria
ganar([X,X,X,_,_,_,_,_,_], X) :- X \\= '_'.
ganar([_,_,_,X,X,X,_,_,_], X) :- X \\= '_'.
ganar([_,_,_,_,_,_,X,X,X], X) :- X \\= '_'.

% Mensaje de victoria
anunciar_victoria(Jugador) :-
    write('¡Felicidades! El jugador '), 
    write(Jugador), 
    write(' ha ganado!'), nl.`,
      sampleQueries: [
        "tablero_inicial(T).",
        "mostrar_tablero([x,o,3,4,x,6,7,8,o]).",
        "ganar([x,x,x,4,5,6,7,8,9], Ganador).",
        "anunciar_victoria(x).",
        "hacer_movimiento(1, x, [1,2,3,4,5,6,7,8,9], Nuevo).",
      ],
    },
    "minimax-prolog": {
      title: "Algoritmo Minimax en Prolog",
      description:
        "Implementación del algoritmo Minimax para juegos de estrategia",
      initialProgram: `% Algoritmo Minimax en Prolog
% Evaluación de posiciones de juego

% Evaluar posición final
evaluar_posicion(Tablero, 100) :- ganar(Tablero, x).
evaluar_posicion(Tablero, -100) :- ganar(Tablero, o).
evaluar_posicion(Tablero, 0) :- tablero_lleno(Tablero).

% Minimax para jugador maximizador
minimax(Tablero, Profundidad, true, Valor) :-
    (evaluar_posicion(Tablero, Valor) ; Profundidad = 0), !.

minimax(Tablero, Profundidad, true, MejorValor) :-
    Profundidad > 0,
    obtener_movimientos(Tablero, Movimientos),
    evaluar_movimientos(Movimientos, Tablero, Profundidad, true, -1000, MejorValor).

% Obtener movimientos posibles
obtener_movimientos(Tablero, Movimientos) :-
    findall(Pos, (nth1(Pos, Tablero, Pos), integer(Pos)), Movimientos).`,
      sampleQueries: [
        "evaluar_posicion([x,x,x,4,5,6,7,8,9], Valor).",
        "obtener_movimientos([x,2,3,o,5,6,7,8,9], Movs).",
        "minimax([x,2,3,4,5,6,7,8,9], 2, true, Valor).",
      ],
    },
    default: {
      title: "Programación Lógica con Prolog",
      description: "Ejercicios básicos de programación lógica",
      initialProgram: `% Ejemplo básico de hechos y reglas
likes(sam, salad).
likes(dean, pie).
likes(sam, apples).

% Reglas
healthy_choice(Person) :-
    likes(Person, salad).`,
      sampleQueries: ["likes(sam, X).", "healthy_choice(sam)."],
    },
  },
  "10": {
    "sistema-experto-reino-fungi": {
      title: "Sistema Experto - Reino Fungi",
      description:
        "Sistema experto para identificar hongos comestibles y venenosos",
      sourceCodeUrl:
        "https://docs.google.com/document/d/1hpVIRV6PR16fyFdhFT7NZwxOiVsMNfrOurzvEVBz4fc/edit?tab=t.0",
      initialProgram: `
% ===============================================
% SISTEMA EXPERTO DEL REINO FUNGI
% ===============================================


% DIRECTIVAS PARA EVITAR WARNINGS
:- discontiguous(filum/1).
:- discontiguous(clase/1).
:- discontiguous(orden/1).
:- discontiguous(familia/1).
:- discontiguous(genero/1).
:- discontiguous(especie/1).


% ===============================================
% DEFINICION TAXONOMICA - PHYLA (DIVISIONES)
% ===============================================


filum(ascomycota).         % Hongos de saco
filum(basidiomycota).      % Hongos de basidio
filum(chytridiomycota).    % Quitridios
filum(zygomycota).         % Zigomicetos
filum(glomeromycota).      % Micorrizas arbusculares
filum(blastocladiomycota). % Blastocladios
filum(neocallimastigomycota). % Hongos anaerobicos


% ===============================================
% CLASES PRINCIPALES
% ===============================================


% ASCOMYCOTA
clase(saccharomycetes).    % Levaduras
clase(eurotiomycetes).     % Aspergillus, Penicillium
clase(sordariomycetes).    % Neurospora, Trichoderma
clase(dothideomycetes).    % Hongos patogenos
clase(leotiomycetes).      % Copa y disco
clase(pezizomycetes).      % Trufas y morillas


% BASIDIOMYCOTA
clase(agaricomycetes).     % Setas tipicas
clase(tremellomycetes).    % Hongos gelatinosos
clase(ustilaginomycetes).  % Carbones
clase(pucciniomycetes).    % Royas


% CHYTRIDIOMYCOTA
clase(chytridiomycetes).   % Quitridios tipicos


% ZYGOMYCOTA
clase(zygomycetes).        % Mucorales


% GLOMEROMYCOTA
clase(glomeromycetes).     % Micorrizas arbusculares


% ===============================================
% ORDENES REPRESENTATIVOS
% ===============================================


% AGARICOMYCETES
orden(agaricales).         % Setas con laminas
orden(boletales).          % Boletos
orden(russulales).         % Russula y Lactarius
orden(polyporales).        % Poliporos
orden(cantharellales).     % Rebozuelos
orden(gomphales).          % Cuerno de la abundancia


% SORDARIOMYCETES
orden(hypocreales).        % Trichoderma, Fusarium
orden(sordariales).        % Neurospora
orden(diaporthales).       % Patogenos de plantas


% EUROTIOMYCETES
orden(eurotiales).         % Aspergillus, Penicillium
orden(onygenales).         % Dermatofitos


% SACCHAROMYCETES
orden(saccharomycetales).  % Levaduras verdaderas


% ===============================================
% FAMILIAS IMPORTANTES
% ===============================================


% AGARICALES
familia(agaricaceae).      % Champinones
familia(pleurotaceae).     % Setas ostra
familia(tricholomataceae). % Tricolomas
familia(cortinariaceae).   % Cortinarios
familia(strophariaceae).   % Stropharia
familia(amanitaceae).      % Amanitas


% BOLETALES
familia(boletaceae).       % Boletos verdaderos
familia(suillaceae).       % Suillus


% RUSSULALES
familia(russulaceae).      % Russula y Lactarius


% CANTHARELLALES
familia(cantharellaceae).  % Cantharellus


% POLYPORALES
familia(polyporaceae).     % Poliporos lenosos
familia(fomitopsidaceae).  % Yesca
familia(ganodermataceae).  % Ganoderma


% HYPOCREALES
familia(hypocreaceae).     % Trichoderma
familia(nectriaceae).      % Fusarium


% EUROTIALES
familia(aspergillaceae).   % Aspergillus
familia(trichocomaceae).   % Penicillium


% SACCHAROMYCETALES
familia(saccharomycetaceae). % Saccharomyces


% ===============================================
% GENEROS REPRESENTATIVOS
% ===============================================


% COMESTIBLES COMERCIALES
genero(agaricus).          % Champinon comun
genero(pleurotus).         % Seta ostra
genero(lentinula).         % Shiitake
genero(flammulina).        % Enoki
genero(volvariella).       % Seta de paja


% MICORRIZOGENOS
genero(boletus).           % Boletos
genero(amanita).           % Amanitas
genero(russula).           % Rusulas
genero(lactarius).         % Niscalos
genero(cantharellus).      % Rebozuelos


% PATOGENOS IMPORTANTES
genero(fusarium).          % Patogeno de plantas
genero(aspergillus).       % Patogeno oportunista
genero(candida).           % Levadura patogena
genero(cryptococcus).      % Patogeno del SNC
genero(histoplasma).       % Patogeno pulmonar


% INDUSTRIALES
genero(saccharomyces).     % Levadura del pan
genero(penicillium).       % Antibioticos
genero(trichoderma).       % Control biologico
genero(rhizopus).          % Fermentacion


% DESCOMPONEDORES
genero(trametes).          % Descompositor de madera
genero(ganoderma).         % Reishi
genero(phanerochaete).     % Lignivoroß
genero(coprinus).          % Tinta china
genero(hericium).          % Melena de leon


% ===============================================
% ESPECIES ESPECIFICAS
% ===============================================


% COMESTIBLES POPULARES
especie(agaricus_bisporus).      % Champinon comun
especie(pleurotus_ostreatus).    % Seta ostra
especie(lentinula_edodes).       % Shiitake
especie(cantharellus_cibarius).  % Rebozuelo
especie(boletus_edulis).         % Boleto comestible


% TOXICAS Y VENENOSAS
especie(amanita_phalloides).     % Oronja verde (mortal)
especie(amanita_ocreata).        % Angel destructor
especie(galerina_marginata).     % Galerina venenosa
especie(psilocybe_cubensis).     % Psilocybe (alucinogena)


% MEDICINALES
especie(ganoderma_lucidum).      % Reishi
especie(cordyceps_sinensis).     % Cordyceps
especie(trametes_versicolor).    % Cola de pavo
especie(hericium_erinaceus).     % Melena de leon


% INDUSTRIALES
especie(saccharomyces_cerevisiae).   % Levadura del pan
especie(penicillium_chrysogenum).    % Penicilina
especie(aspergillus_niger).          % Acido citrico
especie(trichoderma_harzianum).      % Biocontrol


% ===============================================
% RELACIONES TAXONOMICAS
% ===============================================


% Estructura jerarquica: Reino > Filo > Clase > Orden > Familia > Genero > Especie


pertenece_a_filum(saccharomycetes, ascomycota).
pertenece_a_filum(eurotiomycetes, ascomycota).
pertenece_a_filum(sordariomycetes, ascomycota).
pertenece_a_filum(pezizomycetes, ascomycota).
pertenece_a_filum(leotiomycetes, ascomycota).
pertenece_a_filum(dothideomycetes, ascomycota).


pertenece_a_filum(agaricomycetes, basidiomycota).
pertenece_a_filum(tremellomycetes, basidiomycota).
pertenece_a_filum(ustilaginomycetes, basidiomycota).
pertenece_a_filum(pucciniomycetes, basidiomycota).


pertenece_a_filum(chytridiomycetes, chytridiomycota).
pertenece_a_filum(zygomycetes, zygomycota).
pertenece_a_filum(glomeromycetes, glomeromycota).


pertenece_a_clase(agaricales, agaricomycetes).
pertenece_a_clase(boletales, agaricomycetes).
pertenece_a_clase(russulales, agaricomycetes).
pertenece_a_clase(polyporales, agaricomycetes).
pertenece_a_clase(cantharellales, agaricomycetes).


pertenece_a_clase(hypocreales, sordariomycetes).
pertenece_a_clase(sordariales, sordariomycetes).
pertenece_a_clase(diaporthales, sordariomycetes).


pertenece_a_clase(eurotiales, eurotiomycetes).
pertenece_a_clase(onygenales, eurotiomycetes).


pertenece_a_clase(saccharomycetales, saccharomycetes).


pertenece_a_orden(agaricaceae, agaricales).
pertenece_a_orden(pleurotaceae, agaricales).
pertenece_a_orden(amanitaceae, agaricales).
pertenece_a_orden(tricholomataceae, agaricales).
pertenece_a_orden(cortinariaceae, agaricales).
pertenece_a_orden(strophariaceae, agaricales).


pertenece_a_orden(boletaceae, boletales).
pertenece_a_orden(suillaceae, boletales).


pertenece_a_orden(russulaceae, russulales).


pertenece_a_orden(cantharellaceae, cantharellales).


pertenece_a_orden(polyporaceae, polyporales).
pertenece_a_orden(fomitopsidaceae, polyporales).
pertenece_a_orden(ganodermataceae, polyporales).


pertenece_a_orden(hypocreaceae, hypocreales).
pertenece_a_orden(nectriaceae, hypocreales).


pertenece_a_orden(aspergillaceae, eurotiales).
pertenece_a_orden(trichocomaceae, eurotiales).


pertenece_a_orden(saccharomycetaceae, saccharomycetales).


pertenece_a_familia(agaricus, agaricaceae).
pertenece_a_familia(pleurotus, pleurotaceae).
pertenece_a_familia(amanita, amanitaceae).
pertenece_a_familia(boletus, boletaceae).
pertenece_a_familia(cantharellus, cantharellaceae).
pertenece_a_familia(russula, russulaceae).
pertenece_a_familia(lactarius, russulaceae).
pertenece_a_familia(trametes, polyporaceae).
pertenece_a_familia(ganoderma, ganodermataceae).
pertenece_a_familia(trichoderma, hypocreaceae).
pertenece_a_familia(fusarium, nectriaceae).
pertenece_a_familia(aspergillus, aspergillaceae).
pertenece_a_familia(penicillium, trichocomaceae).
pertenece_a_familia(saccharomyces, saccharomycetaceae).
pertenece_a_familia(hericium, polyporaceae).


pertenece_a_genero(agaricus_bisporus, agaricus).
pertenece_a_genero(pleurotus_ostreatus, pleurotus).
pertenece_a_genero(amanita_phalloides, amanita).
pertenece_a_genero(amanita_ocreata, amanita).
pertenece_a_genero(boletus_edulis, boletus).
pertenece_a_genero(cantharellus_cibarius, cantharellus).
pertenece_a_genero(lentinula_edodes, lentinula).
pertenece_a_genero(ganoderma_lucidum, ganoderma).
pertenece_a_genero(trametes_versicolor, trametes).
pertenece_a_genero(trichoderma_harzianum, trichoderma).
pertenece_a_genero(saccharomyces_cerevisiae, saccharomyces).
pertenece_a_genero(penicillium_chrysogenum, penicillium).
pertenece_a_genero(aspergillus_niger, aspergillus).
pertenece_a_genero(hericium_erinaceus, hericium).


% ===============================================
% CARACTERISTICAS MORFOLOGICAS
% ===============================================


% Tipo de reproduccion
reproduce_por_esporas(X) :- filum(X).
reproduce_sexualmente(ascomycota).
reproduce_sexualmente(basidiomycota).
reproduce_sexualmente(zygomycota).
reproduce_sexualmente(glomeromycota).
reproduce_sexualmente(blastocladiomycota).
reproduce_sexualmente(neocallimastigomycota).
reproduce_asexualmente(X) :- filum(X).


% Estructuras reproductivas
tiene_ascas(X) :- pertenece_a_filum(X, ascomycota).
tiene_basidios(X) :- pertenece_a_filum(X, basidiomycota).
tiene_zoosporas(X) :- pertenece_a_filum(X, chytridiomycota).
tiene_zigosporas(X) :- pertenece_a_filum(X, zygomycota).


% Morfologia del cuerpo fructifero
tiene_sombrero(X) :- pertenece_a_clase(X, agaricales).
tiene_sombrero(X) :- pertenece_a_clase(X, boletales).
tiene_laminas(X) :- pertenece_a_clase(X, agaricales).
tiene_poros(X) :- pertenece_a_clase(X, boletales).
tiene_poros(X) :- pertenece_a_clase(X, polyporales).
tiene_pliegues(X) :- pertenece_a_clase(X, cantharellales).


% Consistencia
consistencia_carnosa(X) :- pertenece_a_orden(X, agaricaceae).
consistencia_carnosa(X) :- pertenece_a_orden(X, boletaceae).
consistencia_lenosa(X) :- pertenece_a_orden(X, polyporaceae).
consistencia_gelatinosa(X) :- pertenece_a_filum(X, tremellomycetes).


% Habitat
terrestre(X) :- pertenece_a_familia(X, agaricaceae).
terrestre(X) :- pertenece_a_familia(X, boletaceae).
lignivoro(X) :- pertenece_a_familia(X, polyporaceae).
lignivoro(X) :- pertenece_a_familia(X, pleurotaceae).
coprofilo(X) :- genero(X), X = coprinus.


% ===============================================
% CARACTERISTICAS ECOLOGICAS
% ===============================================


% Modo de nutricion
saprofito(X) :- pertenece_a_familia(X, polyporaceae).
saprofito(X) :- pertenece_a_familia(X, pleurotaceae).
micorrizogeno(X) :- pertenece_a_familia(X, boletaceae).
micorrizogeno(X) :- pertenece_a_familia(X, amanitaceae).
micorrizogeno(X) :- pertenece_a_familia(X, russulaceae).
parasito(X) :- pertenece_a_familia(X, nectriaceae).
parasito(X) :- filum(X), X = ustilaginomycetes.


% Tipo de micorriza
forma_ectomicorriza(X) :- micorrizogeno(X), pertenece_a_filum(X, basidiomycota).
forma_endomicorriza(X) :- pertenece_a_filum(X, glomeromycota).


% Sustrato preferido
prefiere_madera_dura(X) :- genero(X), X = trametes.
prefiere_madera_blanda(X) :- genero(X), X = fomes.
prefiere_suelo_rico(X) :- genero(X), X = agaricus.
prefiere_hojarasca(X) :- genero(X), X = marasmius.


% ===============================================
% PROPIEDADES Y USOS
% ===============================================


% Comestibilidad
comestible(X) :- especie(X), X = agaricus_bisporus.
comestible(X) :- especie(X), X = pleurotus_ostreatus.
comestible(X) :- especie(X), X = lentinula_edodes.
comestible(X) :- especie(X), X = boletus_edulis.
comestible(X) :- especie(X), X = cantharellus_cibarius.


toxico(X) :- especie(X), X = amanita_phalloides.
toxico(X) :- especie(X), X = amanita_ocreata.
toxico(X) :- especie(X), X = galerina_marginata.


alucinogeno(X) :- especie(X), X = psilocybe_cubensis.


% Propiedades medicinales
antitumoral(X) :- especie(X), X = ganoderma_lucidum.
antitumoral(X) :- especie(X), X = trametes_versicolor.
inmunomodulador(X) :- especie(X), X = ganoderma_lucidum.
neuroprotector(X) :- especie(X), X = hericium_erinaceus.
adaptogeno(X) :- especie(X), X = cordyceps_sinensis.


% Uso industrial
produce_antibioticos(X) :- especie(X), X = penicillium_chrysogenum.
produce_acidos(X) :- especie(X), X = aspergillus_niger.
usado_en_fermentacion(X) :- especie(X), X = saccharomyces_cerevisiae.
biocontrol(X) :- especie(X), X = trichoderma_harzianum.


% ===============================================
% REGLAS DE IDENTIFICACION
% ===============================================


% Identificacion por caracteristicas morfologicas
es_ascomiceto(X) :- tiene_ascas(X).
es_basidiomiceto(X) :- tiene_basidios(X).
es_zigomiceto(X) :- tiene_zigosporas(X).


% Identificacion por habitat
es_descomponedor_madera(X) :- lignivoro(X), saprofito(X).
es_formador_micorrizas(X) :- micorrizogeno(X).
es_patogeno_plantas(X) :- parasito(X), pertenece_a_familia(X, nectriaceae).


% Identificacion por uso
es_hongo_comestible(X) :- comestible(X).
es_hongo_medicinal(X) :- antitumoral(X).
es_hongo_medicinal(X) :- inmunomodulador(X).
es_hongo_medicinal(X) :- adaptogeno(X).
es_hongo_industrial(X) :- produce_antibioticos(X).
es_hongo_industrial(X) :- usado_en_fermentacion(X).


% Identificacion de seguridad
hongo_seguro_consumo(agaricus_bisporus).
hongo_seguro_consumo(pleurotus_ostreatus).
hongo_seguro_consumo(lentinula_edodes).
hongo_seguro_consumo(boletus_edulis).
hongo_seguro_consumo(cantharellus_cibarius).


% ===============================================
% PREDICADOS DE ANALISIS
% ===============================================


% Contar especies por genero
total_especies_genero(N, G) :-
    findall(X, pertenece_a_genero(X, G), Lista),
    length(Lista, N).


% Contar generos por familia
total_generos_familia(N, F) :-
    findall(X, pertenece_a_familia(X, F), Lista),
    length(Lista, N).


% Listar hongos comestibles
listar_comestibles(Lista) :-
    findall(X, comestible(X), Lista).


% Listar hongos toxicos
listar_toxicos(Lista) :-
    findall(X, toxico(X), Lista).


% Listar hongos medicinales
listar_medicinales(Lista) :-
    findall(X, es_hongo_medicinal(X), Lista).


% Analisis ecologico
hongos_por_habitat(saprofitos, Lista) :-
    findall(X, saprofito(X), Lista).
hongos_por_habitat(micorrizogenos, Lista) :-
    findall(X, micorrizogeno(X), Lista).
hongos_por_habitat(parasitos, Lista) :-
    findall(X, parasito(X), Lista).


% Analisis taxonomico
especies_por_filum(Filum, Lista) :-
    findall(Especie,
        (pertenece_a_genero(Especie, Genero),
         pertenece_a_familia(Genero, Familia),
         pertenece_a_orden(Familia, Orden),
         pertenece_a_clase(Orden, Clase),
         pertenece_a_filum(Clase, Filum)),
        Lista).


% ===============================================
% SISTEMA DE DIAGNOSTICO/IDENTIFICACION
% ===============================================


% Identificar hongo por caracteristicas
identificar_hongo(Especie, Caracteristicas) :-
    especie(Especie),
    cumple_caracteristicas(Especie, Caracteristicas).


cumple_caracteristicas(_, []).
cumple_caracteristicas(Especie, [C|Resto]) :-
    call(C, Especie),
    cumple_caracteristicas(Especie, Resto).


% Recomendar uso segun propiedades
recomendar_uso(Especie, medicinal) :- es_hongo_medicinal(Especie).
recomendar_uso(Especie, alimentario) :- es_hongo_comestible(Especie).
recomendar_uso(Especie, industrial) :- es_hongo_industrial(Especie).
recomendar_uso(Especie, evitar) :- toxico(Especie).


% ===============================================
% PREDICADOS DE BUSQUEDA ADICIONALES
% ===============================================


% Buscar por genero
buscar_por_genero(Genero, Especies) :-
    findall(X, pertenece_a_genero(X, Genero), Especies).


% Buscar por familia
buscar_por_familia(Familia, Generos) :-
    findall(X, pertenece_a_familia(X, Familia), Generos).


% Buscar por filum
buscar_por_filum(Filum, Clases) :-
    findall(X, pertenece_a_filum(X, Filum), Clases).

      `,
      sampleQueries: [
        "listar_comestibles(Lista).",
        "es_hongo_medicinal(X).",
        "especies_por_filum(basidiomycota, Lista).",
        "identificar_hongo(X, [comestible]).",
      ],
    },
    "arbol-genealogico": {
      title: "Árbol Genealógico con Prolog",
      description:
        "Construcción de un árbol genealógico usando hechos y reglas",
      sourceCodeUrl:
        "https://docs.google.com/document/d/1SRCcRGPCkd5cmwIuJeqJ3XOMAx8aUq7_mY201ubVAGw/edit?tab=t.0",
      initialProgram: `
% ===============================================
% ÁRBOL GENEALÓGICO DE CAROL
% ===============================================


% DIRECTIVAS PARA EVITAR WARNINGS
:- discontiguous(varon/1).
:- discontiguous(mujer/1).


% ===============================================
% DEFINICIÓN DE SEXOS - TODOS LOS VARONES
% ===============================================


varon(wilber_jr).          % Hermano menor (soltero)
varon(wilber_sr).          % Padre
varon(eduardo).            % Abuelo materno
varon(raul).               % Abuelo paterno
varon(felipe).             % Bisabuelo materno
varon(ricardo).            % Bisabuelo materno
varon(antonio).            % Bisabuelo paterno
varon(miguel).             % Bisabuelo paterno
varon(roberto).            % Tío materno
varon(sergio).             % Tío materno
varon(ernesto).            % Tío paterno
varon(mario).              % Tío paterno
varon(carlos).             % Esposo de Norma
varon(luis).               % Esposo de Patricia
varon(pedro).              % Esposo de Claudia
varon(fernando).           % Esposo de Teresa
varon(daniel).             % Primo materno
varon(miguel_jr).          % Primo materno
varon(andres).             % Primo materno
varon(joaquin).            % Primo materno
varon(sebastian).          % Primo materno
varon(diego).              % Primo paterno
varon(fabian).             % Primo paterno
varon(ricardo_jr).         % Primo paterno
varon(emilio).             % Primo paterno
varon(mateo).              % Primo paterno
varon(nicolas).            % Hijo de Karla
varon(santiago).           % Hijo de Laura
varon(leonardo).           % Hijo de Alejandra
varon(arturo).             % Esposo de Esperanza Jr.
varon(kevin).              % Hijo de Esperanza Jr.
varon(alberto).            % Primo de Wilber Sr.
varon(alexis).             % Hijo de Alberto


% ===============================================
% DEFINICIÓN DE SEXOS - TODAS LAS MUJERES
% ===============================================


mujer(carol).              % Persona principal (soltera)
mujer(lisbeth).            % Hermana mayor (soltera)
mujer(reyna).              % Madre
mujer(margarita).          % Abuela materna
mujer(olga).               % Abuela paterna
mujer(esperanza).          % Bisabuela materna
mujer(carmela).            % Bisabuela materna
mujer(rosa).               % Bisabuela paterna
mujer(elena).              % Bisabuela paterna
mujer(norma).              % Tía materna
mujer(patricia).           % Tía materna
mujer(claudia).            % Tía paterna
mujer(teresa).             % Tía paterna
mujer(ana).                % Esposa de Roberto
mujer(monica).             % Esposa de Sergio
mujer(silvia).             % Esposa de Ernesto
mujer(gloria).             % Esposa de Mario
mujer(karla).              % Prima materna
mujer(valeria).            % Prima materna
mujer(cristina).           % Prima materna
mujer(laura).              % Prima materna
mujer(natalia).            % Prima materna
mujer(camila).             % Prima paterna
mujer(alejandra).          % Prima paterna
mujer(sofia).              % Prima paterna
mujer(isabella).           % Prima paterna
mujer(gabriela).           % Prima paterna
mujer(valentina).          % Hija de Miguel Jr.
mujer(amanda).             % Hija de Diego
mujer(esperanza_jr).       % Tía abuela
mujer(susana).             % Hija de Esperanza Jr.
mujer(ines).               % Esposa de Alberto
mujer(jennifer).           % Hija de Alberto


% ===============================================
% RELACIONES DE MATRIMONIO
% ===============================================


% Matrimonios de la familia nuclear
casados(wilber_sr, reyna).


% Matrimonios de abuelos
casados(eduardo, margarita).
casados(raul, olga).


% Matrimonios de bisabuelos
casados(felipe, esperanza).
casados(ricardo, carmela).
casados(antonio, rosa).
casados(miguel, elena).


% Matrimonios de tíos
casados(carlos, norma).
casados(roberto, ana).
casados(luis, patricia).
casados(sergio, monica).
casados(ernesto, silvia).
casados(pedro, claudia).
casados(mario, gloria).
casados(fernando, teresa).


% Matrimonios de parientes lejanos
casados(arturo, esperanza_jr).
casados(alberto, ines).


% ===============================================
% RELACIONES DE PROGENITOR
% ===============================================


% FAMILIA NUCLEAR
% Carol y sus hermanos
progenitor(wilber_sr, carol).
progenitor(reyna, carol).
progenitor(wilber_sr, lisbeth).
progenitor(reyna, lisbeth).
progenitor(wilber_sr, wilber_jr).
progenitor(reyna, wilber_jr).


% GENERACIÓN DE LOS PADRES
% Padres de Reyna
progenitor(eduardo, reyna).
progenitor(margarita, reyna).
progenitor(eduardo, norma).
progenitor(margarita, norma).
progenitor(eduardo, roberto).
progenitor(margarita, roberto).
progenitor(eduardo, patricia).
progenitor(margarita, patricia).
progenitor(eduardo, sergio).
progenitor(margarita, sergio).


% Padres de Wilber Sr.
progenitor(raul, wilber_sr).
progenitor(olga, wilber_sr).
progenitor(raul, ernesto).
progenitor(olga, ernesto).
progenitor(raul, claudia).
progenitor(olga, claudia).
progenitor(raul, mario).
progenitor(olga, mario).
progenitor(raul, teresa).
progenitor(olga, teresa).


% GENERACIÓN DE LOS ABUELOS
% Padres de Eduardo
progenitor(felipe, eduardo).
progenitor(esperanza, eduardo).
progenitor(felipe, esperanza_jr).
progenitor(esperanza, esperanza_jr).


% Padres de Margarita
progenitor(ricardo, margarita).
progenitor(carmela, margarita).


% Padres de Raul
progenitor(antonio, raul).
progenitor(rosa, raul).
progenitor(antonio, alberto).
progenitor(rosa, alberto).


% Padres de Olga
progenitor(miguel, olga).
progenitor(elena, olga).


% GENERACIÓN DE LOS PRIMOS
% Hijos de Norma y Carlos
progenitor(norma, karla).
progenitor(carlos, karla).
progenitor(norma, valeria).
progenitor(carlos, valeria).
progenitor(norma, daniel).
progenitor(carlos, daniel).


% Hijos de Roberto y Ana
progenitor(roberto, miguel_jr).
progenitor(ana, miguel_jr).
progenitor(roberto, cristina).
progenitor(ana, cristina).


% Hijos de Patricia y Luis
progenitor(patricia, laura).
progenitor(luis, laura).
progenitor(patricia, andres).
progenitor(luis, andres).
progenitor(patricia, natalia).
progenitor(luis, natalia).


% Hijos de Sergio y Monica
progenitor(sergio, joaquin).
progenitor(monica, joaquin).
progenitor(sergio, sebastian).
progenitor(monica, sebastian).


% Hijos de Ernesto y Silvia
progenitor(ernesto, diego).
progenitor(silvia, diego).
progenitor(ernesto, fabian).
progenitor(silvia, fabian).
progenitor(ernesto, camila).
progenitor(silvia, camila).


% Hijos de Claudia y Pedro
progenitor(claudia, alejandra).
progenitor(pedro, alejandra).
progenitor(claudia, ricardo_jr).
progenitor(pedro, ricardo_jr).


% Hijos de Mario y Gloria
progenitor(mario, emilio).
progenitor(gloria, emilio).
progenitor(mario, sofia).
progenitor(gloria, sofia).
progenitor(mario, mateo).
progenitor(gloria, mateo).


% Hijos de Teresa y Fernando
progenitor(teresa, isabella).
progenitor(fernando, isabella).
progenitor(teresa, gabriela).
progenitor(fernando, gabriela).


% SEGUNDA GENERACIÓN DE PRIMOS
progenitor(karla, nicolas).
progenitor(miguel_jr, valentina).
progenitor(laura, santiago).
progenitor(diego, amanda).
progenitor(alejandra, leonardo).


% PARIENTES LEJANOS
progenitor(esperanza_jr, susana).
progenitor(arturo, susana).
progenitor(esperanza_jr, kevin).
progenitor(arturo, kevin).
progenitor(alberto, jennifer).
progenitor(ines, jennifer).
progenitor(alberto, alexis).
progenitor(ines, alexis).


% ===============================================
% REGLAS DE PARENTESCO
% ===============================================


% Padres
padre(P, H) :- progenitor(P, H), varon(P).
madre(M, H) :- progenitor(M, H), mujer(M).


% Hijos
hijo(H, P) :- progenitor(P, H), varon(H).
hija(H, P) :- progenitor(P, H), mujer(H).


% Hermanos
hermano(X, Y) :- progenitor(Z, X), progenitor(Z, Y), varon(X), X \= Y.
hermana(X, Y) :- progenitor(Z, X), progenitor(Z, Y), mujer(X), X \= Y.


% Abuelos
abuelo(A, N) :- progenitor(A, P), progenitor(P, N), varon(A).
abuela(A, N) :- progenitor(A, P), progenitor(P, N), mujer(A).


% Nietos
nieto(N, A) :- abuelo(A, N), varon(N).
nieta(N, A) :- abuela(A, N), mujer(N).


% Tíos
tio(T, S) :- hermano(T, P), progenitor(P, S), varon(T).
tio(T, S) :- casados(T, X), hermana(X, P), progenitor(P, S), varon(T).
tia(T, S) :- hermana(T, P), progenitor(P, S), mujer(T).
tia(T, S) :- casados(X, T), hermano(X, P), progenitor(P, S), mujer(T).


% Primos
primo(P1, P2) :- progenitor(PA1, P1), progenitor(PA2, P2),
                 hermano(PA1, PA2), varon(P1), P1 \= P2.
prima(P1, P2) :- progenitor(PA1, P1), progenitor(PA2, P2),
                 hermano(PA1, PA2), mujer(P1), P1 \= P2.


% Bisabuelos
bisabuelo(B, N) :- progenitor(B, A), progenitor(A, P), progenitor(P, N), varon(B).
bisabuela(B, N) :- progenitor(B, A), progenitor(A, P), progenitor(P, N), mujer(B).


% Sobrinos
sobrino(S, T) :- progenitor(P, S), hermano(P, T), varon(S).
sobrina(S, T) :- progenitor(P, S), hermano(P, T), mujer(S).


% Pareja
esposo(X, Y) :- casados(X, Y), varon(X).
esposa(X, Y) :- casados(X, Y), mujer(X).


% ===============================================
% PREDICADOS DE CÁLCULO
% ===============================================


% Contar hijos
total_hijos(N,Y) :- findall(X, progenitor(Y,X), Lista), length(Lista,N).
total_hijas(N,Y) :- findall(X, hija(X,Y), Lista), length(Lista,N).
total_hijos_varones(N,Y) :- findall(X, hijo(X,Y), Lista), length(Lista,N).


% Porcentajes
porcentaje_hijos(A,X) :- total_hijos_varones(T,X), total_hijos(Z,X), Z > 0, A is (T / Z) * 100.
porcentaje_hijas(A,X) :- total_hijas(T,X), total_hijos(Z,X), Z > 0, A is (T / Z) * 100.


% Contar parientes por tipo
total_nietos(N,Y) :- findall(X, nieto(X,Y), Lista), length(Lista,N).
total_nietas(N,Y) :- findall(X, nieta(X,Y), Lista), length(Lista,N).
total_primos(N,Y) :- findall(X, primo(X,Y), Lista), length(Lista,N).
total_primas(N,Y) :- findall(X, prima(X,Y), Lista), length(Lista,N).        
        `,
      sampleQueries: [
        "abuelo(X, carol).",
        "tio(X, carol).",
        "total_hijos(N, wilber_sr).",
      ],
    },
  },
  "13": {
    "gans-classification": {
      title: "Clasificación con GANs en Prolog",
      description:
        "Sistema de clasificación usando lógica para redes generativas",
      initialProgram: `% Sistema de clasificación para GANs
% Clasificación de imágenes generadas

imagen_tipo(real, natural).
imagen_tipo(generada, artificial).

% Calidad de imagen
calidad_imagen(alta) :- resolucion(X), X > 512.
calidad_imagen(media) :- resolucion(X), X >= 256, X =< 512.
calidad_imagen(baja) :- resolucion(X), X < 256.

% Clasificador
clasificar_imagen(Tipo, Calidad) :-
    imagen_tipo(Origen, Tipo),
    calidad_imagen(Calidad).`,
      sampleQueries: [
        "imagen_tipo(real, X).",
        "calidad_imagen(alta).",
        "clasificar_imagen(artificial, Calidad).",
      ],
    },
  },
  "14": {
    "sistema-combinado": {
      title: "Sistema Experto Combinado",
      description: "Sistema que combina múltiples dominios de conocimiento",
      initialProgram: `% Sistema Experto Combinado
% Combinación de dominios: legal, médico, financiero

% Dominio legal
responsabilidad_legal(persona, acto_negligente).
responsabilidad_legal(empresa, acto_corporativo).

% Dominio médico  
diagnostico(sintoma_fiebre, gripe).
diagnostico(sintoma_dolor_cabeza, migrana).

% Dominio financiero
riesgo_crediticio(alto, ingresos_bajos).
riesgo_crediticio(bajo, ingresos_altos).

% Reglas combinadas
evaluacion_integral(Persona, Resultado) :-
    responsabilidad_legal(Persona, Legal),
    riesgo_crediticio(Riesgo, _),
    combinar_factores(Legal, Riesgo, Resultado).

combinar_factores(acto_negligente, alto, riesgo_total).
combinar_factores(acto_corporativo, bajo, riesgo_moderado).`,
      sampleQueries: [
        "porcentaje_genero_con_caso(mujer, P).",
        "distribucion_tipos_por_genero(hombre, D).",
        "casos_por_pais(canada, C).",
        "personas_con_multiples_casos(P).",
      ],
    },
  },
  "15": {
    "sistema-legal": {
      title: "Sistema Experto Legal",
      description: "",
      initialProgram: `
% ================================================================
% SISTEMA EXPERTO LEGAL AVANZADO% ================================================================
:- dynamic(persona/4).
:- dynamic(caso/6).
:- dynamic(estadistica_cache/3).
:- dynamic(log_evento/3).
:- dynamic(alerta/3).
:- use_module(library(date)).
:- use_module(library(aggregate)).
:- use_module(library(lists)).


% ================================================================
% BASE DE DATOS INICIAL
% ================================================================


% Base de datos inicial de personas
persona(juana, 34, hombre, eeuu).
persona(emily, 27, mujer, canada).
persona(michael, 16, hombre, eeuu).
persona(sophia, 45, mujer, canada).
persona(daniel, 29, hombre, eeuu).
persona(emma, 38, mujer, reino_unido).
persona(oliver, 50, hombre, alemania).
persona(isabella, 17, mujer, espana).
persona(liam, 65, hombre, francia).
persona(amelia, 40, mujer, italia).
persona(santiago, 28, hombre, chile).
persona(valentina, 22, mujer, colombia).
persona(mateo, 15, hombre, peru).
persona(maria, 55, mujer, argentina).
persona(diego, 33, hombre, mexico).
persona(akira, 31, hombre, japon).
persona(ananya, 26, mujer, india).
persona(wei, 19, hombre, china).
persona(noah, 58, hombre, australia).
persona(zara, 35, mujer, nueva_zelanda).
persona(amina, 29, mujer, nigeria).
persona(khalid, 41, hombre, emiratos_arabes).
persona(fatima, 16, mujer, egipto).
persona(samuel, 67, hombre, sudafrica).
persona(layla, 30, mujer, arabia_saudita).
persona(lucas, 24, hombre, brasil).
persona(chloe, 20, mujer, canada).
persona(jacob, 18, hombre, eeuu).
persona(madison, 42, mujer, reino_unido).
persona(elijah, 36, hombre, australia).


% Casos legales
caso(juana, violencia_familiar, 'Violencia domestica reportada', alta, activo, fecha(2025,6,1)).
caso(emily, herencia, 'Disputa por herencia familiar', media, pendiente, fecha(2025,5,15)).
caso(michael, desalojo, 'Amenaza de desalojo por impago', alta, activo, fecha(2025,6,10)).
caso(sophia, pension_alimentos, 'Solicitud pension alimenticia', alta, activo, fecha(2025,5,20)).
caso(daniel, estafa, 'Fraude en compra online', media, investigacion, fecha(2025,6,5)).
caso(emma, violencia_familiar, 'Violencia psicologica', alta, activo, fecha(2025,5,25)).
caso(oliver, herencia, 'Testamento impugnado', media, pendiente, fecha(2025,6,2)).
caso(isabella, desalojo, 'Desalojo por fin de contrato', media, activo, fecha(2025,5,30)).
caso(liam, pension_alimentos, 'Reduccion pension por jubilacion', baja, pendiente, fecha(2025,5,10)).
caso(amelia, estafa, 'Estafa piramidal', alta, investigacion, fecha(2025,6,12)).
caso(santiago, violencia_familiar, 'Violencia fisica documentada', alta, activo, fecha(2025,6,8)).
caso(valentina, herencia, 'Herencia sin testamento', media, pendiente, fecha(2025,5,18)).
caso(mateo, desalojo, 'Familia en situacion vulnerable', alta, activo, fecha(2025,6,15)).
caso(maria, pension_alimentos, 'Incumplimiento de pago', alta, activo, fecha(2025,5,22)).
caso(diego, estafa, 'Fraude inmobiliario', alta, investigacion, fecha(2025,6,3)).
caso(akira, violencia_familiar, 'Violencia en el hogar', alta, activo, fecha(2025,5,28)).
caso(ananya, herencia, 'Disputa entre hermanos', media, pendiente, fecha(2025,6,7)).
caso(wei, desalojo, 'Estudiante sin recursos', media, activo, fecha(2025,5,14)).
caso(noah, pension_alimentos, 'Modificacion por nueva pareja', baja, pendiente, fecha(2025,6,9)).
caso(zara, estafa, 'Fraude bancario', alta, investigacion, fecha(2025,5,29)).
caso(amina, violencia_familiar, 'Violencia cultural/religiosa', alta, activo, fecha(2025,6,11)).
caso(khalid, herencia, 'Herencia internacional', media, pendiente, fecha(2025,5,17)).
caso(fatima, desalojo, 'Menor en riesgo de calle', alta, activo, fecha(2025,6,13)).
caso(samuel, pension_alimentos, 'Pension para nietos', baja, pendiente, fecha(2025,5,19)).
caso(layla, estafa, 'Estafa matrimonial', media, investigacion, fecha(2025,6,4)).
caso(lucas, violencia_familiar, 'Violencia bidireccional', alta, activo, fecha(2025,5,23)).
caso(chloe, herencia, 'Herencia de padres fallecidos', media, pendiente, fecha(2025,6,14)).
caso(jacob, desalojo, 'Joven emancipado', media, activo, fecha(2025,5,27)).
caso(madison, pension_alimentos, 'Pension tras divorcio', alta, activo, fecha(2025,6,6)).
caso(elijah, estafa, 'Fraude en inversiones', alta, investigacion, fecha(2025,5,24)).


% Regiones geográficas
region(eeuu, norteamerica).
region(canada, norteamerica).
region(reino_unido, europa).
region(alemania, europa).
region(espana, europa).
region(francia, europa).
region(italia, europa).
region(chile, sudamerica).
region(colombia, sudamerica).
region(peru, sudamerica).
region(argentina, sudamerica).
region(mexico, norteamerica).
region(japon, asia).
region(india, asia).
region(china, asia).
region(australia, oceania).
region(nueva_zelanda, oceania).
region(nigeria, africa).
region(emiratos_arabes, medio_oriente).
region(egipto, africa).
region(sudafrica, africa).
region(arabia_saudita, medio_oriente).
region(brasil, sudamerica).


% ================================================================
% PREDICADOS DE CONSULTA SIMPLIFICADOS
% ================================================================


% Consulta 1: Porcentaje de género con casos
porcentaje_genero_con_caso(Genero, Porcentaje) :-
    findall(P, persona(P, _, Genero, _), TotalPersonas),
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, _, _, _)), PersonasConCaso),
    length(TotalPersonas, Total),
    length(PersonasConCaso, ConCaso),
    Total > 0,
    Porcentaje is (ConCaso * 100) / Total.


% Consulta 2: Distribución de tipos de caso por género
distribucion_tipos_por_genero(Genero, Distribucion) :-
    findall(Tipo, (persona(P, _, Genero, _), caso(P, Tipo, _, _, _, _)), Tipos),
    contar_ocurrencias(Tipos, Distribucion).


% Consulta 3: Casos por país
casos_por_pais(Pais, Cantidad) :-
    findall(P, (persona(P, _, _, Pais), caso(P, _, _, _, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).


% Consulta 4: Personas con múltiples casos
personas_con_multiples_casos(Personas) :-
    findall(P, (persona(P, _, _, _), findall(_, caso(P, _, _, _, _, _), Casos), length(Casos, N), N > 1), Personas),
    list_to_set(Personas, PersonasUnicas),
    Personas = PersonasUnicas.


% Consulta 5: Casos urgentes por región
casos_urgentes_por_region(Region, Cantidad) :-
    findall(P, (persona(P, _, _, Pais), region(Pais, Region), caso(P, _, _, alta, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).


% Consulta 6: Tiempo promedio de resolución
tiempo_promedio_resolucion(Tipo, DiasPromedio) :-
    findall(D, caso_resuelto(_, Tipo, _, D), Duraciones),
    length(Duraciones, N), N > 0,
    sum_list(Duraciones, Suma),
    DiasPromedio is Suma / N.


% Consulta 7: Estadísticas de edad por tipo de caso
estadisticas_edad_por_tipo(Tipo, Min, Max, Promedio) :-
    findall(Edad, (persona(P, Edad, _, _), caso(P, Tipo, _, _, _, _)), Edades),
    Edades \= [],
    min_list(Edades, Min),
    max_list(Edades, Max),
    sum_list(Edades, Suma),
    length(Edades, Cantidad),
    Promedio is Suma / Cantidad.


% Consulta 8: Personas en riesgo (menores con casos urgentes)
personas_en_riesgo(Personas) :-
    findall(P, (persona(P, Edad, _, _), Edad < 18, caso(P, _, _, alta, _, _)), Personas).


% Consulta 9: Casos por prioridad y género
casos_por_prioridad_genero(Prioridad, Genero, Cantidad) :-
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, Prioridad, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).


% Consulta 10: Top países con más casos
top_paises_con_casos(N, Top) :-
    findall(Pais-Cant, (region(Pais, _), casos_por_pais(Pais, Cant)), PaisesCant),
    sort(2, @>=, PaisesCant, Ordenados),
    length(Ordenados, L),
    (N > L -> N1 = L ; N1 = N),
    primeros_n(N1, Ordenados, Top).


% ================================================================
% NUEVAS CONSULTAS INTUITIVAS (AGREGADAS)
% ================================================================


% 1. Consulta básica de personas con filtros
consultar_personas(Genero, RangoEdad, Pais, Personas) :-
    (Genero == todos -> true ; true),
    (Pais == todos -> true ; true),
    rango_edad(RangoEdad, MinEdad, MaxEdad),
    findall(P, (persona(P, Edad, Genero, Pais),
                  Edad >= MinEdad, Edad =< MaxEdad), Personas).


% Rangos de edad predefinidos
rango_edad(menores, 0, 17).
rango_edad(adultos_jovenes, 18, 35).
rango_edad(adultos, 36, 65).
rango_edad(mayores, 66, 120).
rango_edad(todos, 0, 120).


% 2. Consulta de casos con múltiples filtros
consultar_casos(Tipo, Prioridad, Estado, FechaInicio, FechaFin, Casos) :-
    (Tipo == todos -> true ; true),
    (Prioridad == todas -> true ; true),
    (Estado == todos -> true ; true),
    findall([P, Tipo, Desc],
            (caso(P, Tipo, Desc, Prioridad, Estado, Fecha),
             entre_fechas(Fecha, FechaInicio, FechaFin)), Casos).


% 3. Estadísticas demográficas básicas
estadisticas_demograficas(Genero, Pais, Estadisticas) :-
    findall(Edad, persona(_, Edad, Genero, Pais), Edades),
    Edades \= [],
    length(Edades, Cantidad),
    min_list(Edades, Min),
    max_list(Edades, Max),
    sum_list(Edades, Suma),
    Promedio is Suma / Cantidad,
    Estadisticas = [cantidad-Cantidad, min-Min, max-Max, promedio-Promedio].


% 4. Búsqueda de patrones predefinidos
buscar_patrones(riesgo_familiar, Resultados) :-
    findall(P, (persona(P, Edad, _, _), Edad < 18,
                  caso(P, violencia_familiar, _, alta, _, _)), Resultados).


buscar_patrones(estafas_vulnerables, Resultados) :-
    findall(P, (persona(P, Edad, _, _), Edad > 60,
                  caso(P, estafa, _, alta, _, _)), Resultados).


buscar_patrones(multiples_problemas, Resultados) :-
    findall(P, (persona(P, _, _, _),
                  (caso(P, Tipo1, _, _, _, _),
                   caso(P, Tipo2, _, _, _, _),
                   Tipo1 \= Tipo2)), Resultados).


% 5. Distribución geográfica de casos
distribucion_geografica(TipoCaso, Distribucion) :-
    findall(Region-Cantidad,
            (region(Pais, Region),
             findall(P, (persona(P, _, _, Pais),
                               caso(P, TipoCaso, _, _, _, _)), Casos),
             length(Casos, Cantidad)),
            Distribucion).


% 6. Evolución temporal de casos
% 6. Evolución temporal de casos CORREGIDO
evolucion_temporal(TipoCaso, Meses, Datos) :-
    findall([Mes-Cantidad],
            (between(1, Meses, Mes),
             findall(P, caso(P, TipoCaso, _, _, _, fecha(_, Mes, _)), Casos),
             length(Casos, Cantidad)),
            Datos).




% ================================================================
% PREDICADOS AUXILIARES
% ================================================================


% Contar ocurrencias de elementos en una lista
contar_ocurrencias(Lista, Conteo) :-
    msort(Lista, Ordenada),
    contar_ocurrencias_aux(Ordenada, Conteo).


contar_ocurrencias_aux([], []).
contar_ocurrencias_aux([X|Xs], [[X, N]|Resto]) :-
    contar_repeticiones(X, [X|Xs], N, Restantes),
    contar_ocurrencias_aux(Restantes, Resto).


contar_repeticiones(_, [], 0, []).
contar_repeticiones(X, [X|Xs], N, Resto) :-
    contar_repeticiones(X, Xs, N1, Resto),
    N is N1 + 1.
contar_repeticiones(X, [Y|Xs], 0, [Y|Xs]) :-
    X \= Y.


% Obtener los primeros N elementos
primeros_n(0, _, []) :- !.
primeros_n(N, [H|T], [H|R]) :- N > 0, N1 is N-1, primeros_n(N1, T, R).


% Predicado temporal para casos resueltos (deberías implementar tu lógica real)
caso_resuelto(Persona, Tipo, Prioridad, Dias) :-
    caso(Persona, Tipo, _, Prioridad, resuelto, fecha(A1,M1,D1)),
    fecha_resolucion(fecha(A2,M2,D2)), % Sin variables no usadas
    dias_transcurridos(fecha(A1,M1,D1), fecha(A2,M2,D2), Dias).
fecha_resolucion(fecha(2025, 12, 31)). % Fecha de resolución ficticia


% Calcular días entre fechas
dias_transcurridos(fecha(A1,M1,D1), fecha(A2,M2,D2), Dias) :-
    date_time_stamp(date(A1,M1,D1,0,0,0,0,-,-), T1),
    date_time_stamp(date(A2,M2,D2,0,0,0,0,-,-), T2),
    Dias is round((T2-T1)/86400).


% Manejo de fechas mejorado
entre_fechas(Fecha, Ini, Fin) :-
    Fecha = fecha(A,M,D),
    Ini = fecha(Ai,Mi,Di),
    Fin = fecha(Af,Mf,Df),
    date_time_stamp(date(A,M,D,0,0,0,0,-,-), T),
    date_time_stamp(date(Ai,Mi,Di,0,0,0,0,-,-), Ti),
    date_time_stamp(date(Af,Mf,Df,0,0,0,0,-,-), Tf),
    T >= Ti, T =< Tf.


% ================================================================
% MOSTRAR RESULTADOS (VERSIÓN OPTIMIZADA)
% ================================================================


% Consultas originales
mostrar_resultado(porcentaje_genero_con_caso(Genero, P)) :-
    format('Porcentaje de ~w con casos: ~2f%~n', [Genero, P]).


mostrar_resultado(distribucion_tipos_por_genero(Genero, D)) :-
    format('Distribución para ~w:~n', [Genero]),
    forall(member([Tipo, N], D), format('- ~w: ~w casos~n', [Tipo, N])).


mostrar_resultado(casos_por_pais(Pais, C)) :-
    format('Casos en ~w: ~w~n', [Pais, C]).


mostrar_resultado(personas_con_multiples_casos(P)) :-
    format('Personas con múltiples casos (~w):~n', [length(P)]),
    forall(member(Persona, P), (
        persona(Persona, Edad, Genero, _),
        format('- ~w (~w años, ~w)~n', [Persona, Edad, Genero])
    )).


mostrar_resultado(casos_urgentes_por_region(Region, C)) :-
    format('Casos urgentes en ~w: ~w~n', [Region, C]).


mostrar_resultado(tiempo_promedio_resolucion(Tipo, D)) :-
    format('Tiempo promedio para resolver ~w: ~1f días~n', [Tipo, D]).


mostrar_resultado(estadisticas_edad_por_tipo(Tipo, Min, Max, Prom)) :-
    format('Estadísticas de edad para ~w:~n', [Tipo]),
    format('- Mínima: ~w años~n', [Min]),
    format('- Máxima: ~w años~n', [Max]),
    format('- Promedio: ~1f años~n', [Prom]).


mostrar_resultado(personas_en_riesgo(P)) :-
    format('Personas en riesgo (~w):~n', [length(P)]),
    forall(member(Persona, P), (
        persona(Persona, Edad, _, Pais),
        format('- ~w (~w años, ~w)~n', [Persona, Edad, Pais])
    )).


mostrar_resultado(casos_por_prioridad_genero(Prioridad, Genero, C)) :-
    format('Casos ~w para ~w: ~w~n', [Prioridad, Genero, C]).


mostrar_resultado(top_paises_con_casos(N, Top)) :-
    format('Top ~w países con más casos:~n', [N]),
    forall(member(Pais-Cant, Top), format('- ~w: ~w casos~n', [Pais, Cant])).


% Consultas intuitivas
mostrar_resultado(consultar_personas(Genero, Rango, Pais, Personas)) :-
    format('Personas filtradas [Género: ~w, Edad: ~w, País: ~w]:~n', [Genero, Rango, Pais]),
    (   Personas = [] ->
        write('  No se encontraron resultados.\n')
    ;   length(Personas, Total),
        format('  Total: ~w personas~n', [Total]),
        forall(member(P, Personas), (
            persona(P, Edad, Genero, Pais),
            findall(T, caso(P, T, _, _, _, _), Casos),
            length(Casos, NCasos),
            format('  - ~w (~w años, ~w casos)~n', [P, Edad, NCasos])
        ))
    ).


% Mostrar resultados CORREGIDO (una sola vez)
mostrar_resultado(consultar_casos(Tipo, Prioridad, Estado, _, _, Casos)) :-
    format('Casos filtrados [Tipo: ~w, Prioridad: ~w, Estado: ~w]:~n', [Tipo, Prioridad, Estado]),
    (   Casos = [] ->
        write('  No se encontraron casos.\n')
    ;   length(Casos, Total),
        format('  Total: ~w casos~n', [Total]),
        forall(member([P,_T,D], Casos), (
            persona(P, Edad, Genero, _),
            format('  - ~w (~w, ~w años): ~w~n', [P, Genero, Edad, D])
        ))
    ).


mostrar_resultado(estadisticas_demograficas(Genero, Pais, Stats)) :-
    format('Estadísticas demográficas [Género: ~w, País: ~w]:~n', [Genero, Pais]),
    forall(member(Key-Value, Stats), (
        format('  - ~|~w~t~20+: ~w~n', [Key, Value])
    )).


mostrar_resultado(buscar_patrones(Tipo, Resultados)) :-
    format('Resultados del patrón "~w":~n', [Tipo]),
    (   Resultados = [] ->
        write('  No se encontraron coincidencias.\n')
    ;   length(Resultados, Total),
        format('  Total: ~w casos~n', [Total]),
        forall(member(P, Resultados), (
            persona(P, Edad, Genero, Pais),
            findall(T, caso(P, T, _, _, _, _), Tipos),
            atomic_list_concat(Tipos, ', ', TiposStr),
            format('  - ~w (~w, ~w años, ~w): ~w~n', [P, Genero, Edad, Pais, TiposStr])
        ))
    ).


mostrar_resultado(distribucion_geografica(Tipo, Distribucion)) :-
    format('Distribución geográfica de casos de ~w:~n', [Tipo]),
    (   Distribucion = [] ->
        write('  No hay datos disponibles.\n')
    ;   forall(member(Region-Cant, Distribucion), (
            Cant > 0 ->
                format('  - ~w: ~w casos~n', [Region, Cant])
            ; true
        ))
    ).


mostrar_resultado(evolucion_temporal(Tipo, Meses, Datos)) :-
    format('Evolución de casos de ~w (últimos ~w meses):~n', [Tipo, Meses]),
    (   Datos = [] ->
        write('  No hay datos disponibles.\n')
    ;   forall(member([Mes-Cant], Datos), (
            format('  - Mes ~|~\`0t~2+~w: ~t~w~5+ casos~n', [Mes, Cant])
        ))
    ).


mostrar_resultado(_) :-
    write('Consulta ejecutada correctamente.\n').


% ================================================================
% INICIO DEL SISTEMA
% ================================================================
:- write('Sistema Experto Legal v4.0 cargado correctamente.'), nl,
   write('Escriba "ayuda." para ver las consultas disponibles.'), nl,
   write('Escriba "iniciar_sistema." para comenzar.'), nl.


?- findall(P, caso(P, violencia_familiar, _, _, _, _), CasosTotales), 
   length(CasosTotales, Total), 
   findall(P, (persona(P, _, mujer, _), caso(P, violencia_familiar, _, _, _, _)), CasosMujeres), 
   length(CasosMujeres, Mujeres), 
   Total > 0, 
   Porcentaje is (Mujeres * 100) / Total, 
   format('Porcentaje de mujeres en violencia familiar: ~2f%~n', [Porcentaje]).








findall([Nombre, Edad, Genero, Pais], 
        (persona(Nombre, Edad, Genero, Pais), 
         Edad > 25, 
         caso(Nombre, violencia_familiar, _, _, _, _)), 
        Resultados).




findall(P, persona(P, _, mujer, _), MujeresTotales),
findall(P, (persona(P, _, mujer, _), caso(P, violencia_familiar, _, _, _, _)), MujeresConViolencia),
length(MujeresTotales, Total),
length(MujeresConViolencia, ConCaso),
Total > 0,  % Evitar división por cero
Porcentaje is (ConCaso * 100) / Total,
format('Porcentaje de mujeres con violencia familiar: ~1f% (~w de ~w)~n', [Porcentaje, ConCaso, Total]).







% Predicado principal
porcentaje_mujeres_entre_violencia(Porcentaje) :-
    findall(P, caso(P, violencia_familiar, _, _, _, _), TotalCasos),
    findall(P, (persona(P, _, mujer, _), caso(P, violencia_familiar, _, _, _, _)), MujeresCasos),
    length(TotalCasos, Total),
    length(MujeresCasos, Mujeres),
    Total > 0,  % Evita división por cero
    Porcentaje is (Mujeres * 100) / Total.

% Predicado para mostrar el resultado
mostrar_porcentaje_mujeres_violencia :-
    porcentaje_mujeres_entre_violencia(Porcentaje),
    findall(P, caso(P, violencia_familiar, _, _, _, _), TotalCasos),
    findall(P, (persona(P, _, mujer, _), caso(P, violencia_familiar, _, _, _, _)), MujeresCasos),
    length(TotalCasos, Total),
    length(MujeresCasos, Mujeres),
    format('Análisis de casos de violencia familiar:~n'),
    format('- Total de casos: ~w~n', [Total]),
    format('- Casos que son mujeres: ~w~n', [Mujeres]),
    format('- Porcentaje de mujeres: ~1f%~n', [Porcentaje]).


      
      
      `,

      sampleQueries: [
        "aplicar_ley(robo, Ley).",
        "sancion(penal, Tipo).",
        "caso_tipo(contrato, TipoCaso).",
      ],
    },
  },
};

export default homeworkContent;
