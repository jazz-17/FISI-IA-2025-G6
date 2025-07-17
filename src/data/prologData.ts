interface PrologContent {
  title: string;
  description: string;
  initialProgram: string;
  sampleQueries?: string[];
  sourceCodeUrl?: string;
  imageUrl?: string;
}
const homeworkContent: Record<string, Record<string, PrologContent>> = {
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

:- use_module(library(lists)).
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

:- use_module(library(lists)).
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
    "sistema-paraderos": {
      title: "Sistema de Paraderos",
      description:
        "Sistema experto para identificar paraderos de transporte público y sus características.",
      initialProgram: `
% ===============================================
% SISTEMA EXPERTO DE PARADEROS - TRANSPORTE PÚBLICO (VERSIÓN MEJORADA)
% ===============================================
:- use_module(library(lists)).
:- use_module(library(apply)).
% HECHOS BASE: Definición de paraderos y sus posiciones
paradero(ventanilla, 1).
paradero(marquez, 2).
paradero(urb_industrial_oquendo, 3).
paradero(carmen_de_la_legua_reynoso, 4).
paradero(puente_colonial, 5).
paradero(san_jose, 6).
paradero(unmsm, 7).
paradero(universitaria, 8).

% HECHOS: Costos por paradero (hasta universitaria)
costo_general(ventanilla, 6.0).
costo_general(marquez, 5.0).
costo_general(urb_industrial_oquendo, 4.0).
costo_general(carmen_de_la_legua_reynoso, 3.0).
costo_general(puente_colonial, 2.5).
costo_general(san_jose, 2.0).

% Los estudiantes pagan 50% hasta UNMSM
costo_estudiante(Paradero, CostoEstudiante) :-
    costo_general(Paradero, CostoGeneral),
    CostoEstudiante is CostoGeneral * 0.5.

% HECHOS: Pasajeros que suben en cada paradero
% Formato: sube(Nombre, Paradero, Tipo, Genero)
% Tipo: estudiante/externo, Genero: mujer/varon

% VENTANILLA
sube(ana, ventanilla, externo, mujer).
sube(marilu, ventanilla, externo, mujer).
sube(nayeli, ventanilla, externo, mujer).
sube(mateo, ventanilla, externo, varon).
sube(isaac, ventanilla, estudiante, varon).
sube(aurora, ventanilla, estudiante, mujer).
sube(bianca, ventanilla, estudiante, mujer).

% MARQUEZ
sube(samuel, marquez, externo, varon).
sube(manuel, marquez, externo, varon).
sube(luna, marquez, externo, mujer).
sube(noelia, marquez, estudiante, mujer).
sube(alonso, marquez, estudiante, varon).

% URB INDUSTRIAL OQUENDO
sube(leandro, urb_industrial_oquendo, externo, varon).
sube(dafne, urb_industrial_oquendo, externo, mujer).
sube(araceli, urb_industrial_oquendo, estudiante, mujer).
sube(indira, urb_industrial_oquendo, estudiante, mujer).
sube(axel, urb_industrial_oquendo, estudiante, varon).

% CARMEN DE LA LEGUA REYNOSO
sube(joel, carmen_de_la_legua_reynoso, externo, varon).
sube(emir, carmen_de_la_legua_reynoso, externo, varon).
sube(carmen, carmen_de_la_legua_reynoso, externo, mujer).
sube(karina, carmen_de_la_legua_reynoso, externo, mujer).
sube(giselle, carmen_de_la_legua_reynoso, estudiante, mujer).
sube(alex, carmen_de_la_legua_reynoso, estudiante, varon).
sube(felix, carmen_de_la_legua_reynoso, estudiante, varon).

% PUENTE COLONIAL
sube(lia, puente_colonial, externo, mujer).
sube(melany, puente_colonial, externo, mujer).
sube(vania, puente_colonial, estudiante, mujer).
sube(dilan, puente_colonial, estudiante, varon).

% SAN JOSÉ
sube(hugo, san_jose, externo, varon).
sube(renzo, san_jose, externo, varon).
sube(evelyn, san_jose, estudiante, mujer).
sube(derek, san_jose, estudiante, varon).

% HECHOS: Pasajeros que bajan en cada paradero
% Formato: baja(Nombre, Paradero)

% MARQUEZ
baja(ana, marquez).
baja(mateo, marquez).

% URB INDUSTRIAL OQUENDO
baja(nayeli, urb_industrial_oquendo).
baja(samuel, urb_industrial_oquendo).

% CARMEN DE LA LEGUA REYNOSO
baja(marilu, carmen_de_la_legua_reynoso).
baja(leandro, carmen_de_la_legua_reynoso).

% PUENTE COLONIAL
baja(dafne, puente_colonial).

% SAN JOSÉ
baja(luna, san_jose).
baja(alex, san_jose).

% UNMSM (Todos los estudiantes bajan aquí)
baja(evelyn, unmsm).
baja(derek, unmsm).
baja(vania, unmsm).
baja(dilan, unmsm).
baja(giselle, unmsm).
baja(felix, unmsm).
baja(araceli, unmsm).
baja(indira, unmsm).
baja(axel, unmsm).
baja(noelia, unmsm).
baja(alonso, unmsm).
baja(isaac, unmsm).
baja(aurora, unmsm).
baja(bianca, unmsm).

% UNIVERSITARIA (Los externos restantes)
baja(manuel, universitaria).
baja(joel, universitaria).
baja(emir, universitaria).
baja(carmen, universitaria).
baja(karina, universitaria).
baja(lia, universitaria).
baja(melany, universitaria).
baja(hugo, universitaria).
baja(renzo, universitaria).

% ===============================================
% REGLAS DE CONSULTA BÁSICAS
% ===============================================

% Contar pasajeros por tipo y género en un paradero
contar_pasajeros_tipo_genero(Paradero, Tipo, Genero, Cantidad) :-
    findall(Nombre, sube(Nombre, Paradero, Tipo, Genero), Lista),
    length(Lista, Cantidad).

% Listar pasajeros por tipo y género en un paradero
listar_pasajeros_tipo_genero(Paradero, Tipo, Genero, Lista) :-
    findall(Nombre, sube(Nombre, Paradero, Tipo, Genero), Lista).

% Total de pasajeros que suben en un paradero
total_suben_paradero(Paradero, Total) :-
    findall(Nombre, sube(Nombre, Paradero, _, _), Lista),
    length(Lista, Total).

% Total de pasajeros que bajan en un paradero
total_bajan_paradero(Paradero, Total) :-
    findall(Nombre, baja(Nombre, Paradero), Lista),
    length(Lista, Total).

% ===============================================
% REGLAS AUXILIARES NUEVAS
% ===============================================

% Predicado para verificar si un pasajero es mujer
es_mujer(Nombre) :- 
    sube(Nombre, _, _, mujer).

% Predicado para verificar si un pasajero es varón
es_varon(Nombre) :- 
    sube(Nombre, _, _, varon).

% Predicado para contar elementos en una lista
count(_, [], 0).
count(X, [X|T], N) :- 
    count(X, T, N1), 
    N is N1 + 1.
count(X, [H|T], N) :- 
    X \= H, 
    count(X, T, N).

% Encontrar el máximo en una lista de pares Valor-Clave
max_pair_value(Lista, MaxValor-MaxClave) :-
    Lista = [Primer|Resto],
    max_pair_helper(Resto, Primer, MaxValor-MaxClave).

max_pair_helper([], MaxActual, MaxActual).
max_pair_helper([Valor-Clave|Resto], ValorActual-ClaveActual, MaxFinal) :-
    (Valor > ValorActual ->
        max_pair_helper(Resto, Valor-Clave, MaxFinal)
    ;   max_pair_helper(Resto, ValorActual-ClaveActual, MaxFinal)
    ).

% Encontrar el mínimo en una lista de pares Valor-Clave
min_pair_value(Lista, MinValor-MinClave) :-
    Lista = [Primer|Resto],
    min_pair_helper(Resto, Primer, MinValor-MinClave).

min_pair_helper([], MinActual, MinActual).
min_pair_helper([Valor-Clave|Resto], ValorActual-ClaveActual, MinFinal) :-
    (Valor < ValorActual ->
        min_pair_helper(Resto, Valor-Clave, MinFinal)
    ;   min_pair_helper(Resto, ValorActual-ClaveActual, MinFinal)
    ).

% ===============================================
% REGLAS DE PORCENTAJES
% ===============================================

% Porcentaje de mujeres universitarias en un paradero
porcentaje_mujeres_universitarias(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, mujer, MujeresUniv),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (MujeresUniv * 100) / Total.

% Porcentaje de varones universitarios en un paradero
porcentaje_varones_universitarios(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, varon, VaronesUniv),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (VaronesUniv * 100) / Total.

% Porcentaje de mujeres no universitarias en un paradero
porcentaje_mujeres_no_universitarias(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, externo, mujer, MujeresExt),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (MujeresExt * 100) / Total.

% Porcentaje de varones no universitarios en un paradero
porcentaje_varones_no_universitarios(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, externo, varon, VaronesExt),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (VaronesExt * 100) / Total.

% Porcentaje total de mujeres en un paradero
porcentaje_total_mujeres(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, mujer, MujeresUniv),
    contar_pasajeros_tipo_genero(Paradero, externo, mujer, MujeresExt),
    TotalMujeres is MujeresUniv + MujeresExt,
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (TotalMujeres * 100) / Total.

% Porcentaje total de varones en un paradero
porcentaje_total_varones(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, varon, VaronesUniv),
    contar_pasajeros_tipo_genero(Paradero, externo, varon, VaronesExt),
    TotalVarones is VaronesUniv + VaronesExt,
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (TotalVarones * 100) / Total.

% Regla genérica para calcular porcentaje que cumple una condición en una lista
porcentaje_en_lista(Lista, Condicion, Porcentaje) :-
    include(Condicion, Lista, Filtrados),
    length(Filtrados, CantFiltrados),
    length(Lista, Total),
    Total > 0,
    Porcentaje is (CantFiltrados * 100) / Total.

% ===============================================
% REGLAS DE TRAMOS (EXCLUSIVOS E INCLUSIVOS)
% ===============================================

% Verificar si un paradero está en un rango (inclusivo)
en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin) :-
    paradero(ParaderoInicio, PosInicio),
    paradero(ParaderoFin, PosFin),
    paradero(Paradero, Pos),
    Pos >= PosInicio,
    Pos =< PosFin.

% Verificar si un paradero está en un rango (exclusivo)
en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin) :-
    paradero(ParaderoInicio, PosInicio),
    paradero(ParaderoFin, PosFin),
    paradero(Paradero, Pos),
    Pos >= PosInicio,
    Pos < PosFin.

% Listar pasajeros que subieron en un tramo (inclusivo)
pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, Tipo, Genero, Lista) :-
    findall(Nombre, 
           (sube(Nombre, Paradero, Tipo, Genero), 
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin)), 
           Lista).

% Listar pasajeros que subieron en un tramo (exclusivo)
pasajeros_tramo_exclusivo(ParaderoInicio, ParaderoFin, Tipo, Genero, Lista) :-
    findall(Nombre, 
           (sube(Nombre, Paradero, Tipo, Genero), 
            en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin)), 
           Lista).

% Listar todos los pasajeros en un tramo (sin filtro de tipo/género)
todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, Lista) :-
    findall(Nombre, 
           (sube(Nombre, Paradero, _, _), 
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin)), 
           Lista).

todos_pasajeros_tramo_exclusivo(ParaderoInicio, ParaderoFin, Lista) :-
    findall(Nombre, 
           (sube(Nombre, Paradero, _, _), 
            en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin)), 
           Lista).

% ===============================================
% REGLAS DE CÁLCULOS MONETARIOS
% ===============================================

% Calcular monto de un pasajero específico
monto_pasajero(Nombre, Monto) :-
    sube(Nombre, Paradero, estudiante, _),
    costo_estudiante(Paradero, Monto).

monto_pasajero(Nombre, Monto) :-
    sube(Nombre, Paradero, externo, _),
    costo_general(Paradero, Monto).

% Monto total recaudado de estudiantes en un paradero
monto_estudiantes_paradero(Paradero, MontoTotal) :-
    findall(Monto, 
           (sube(Nombre, Paradero, estudiante, _), 
            monto_pasajero(Nombre, Monto)), 
           Montos),
    sum_list(Montos, MontoTotal).

% Monto total recaudado de externos en un paradero
monto_externos_paradero(Paradero, MontoTotal) :-
    findall(Monto, 
           (sube(Nombre, Paradero, externo, _), 
            monto_pasajero(Nombre, Monto)), 
           Montos),
    sum_list(Montos, MontoTotal).

% Monto total recaudado en un paradero (estudiantes + externos)
monto_total_paradero(Paradero, MontoTotal) :-
    monto_estudiantes_paradero(Paradero, MontoEst),
    monto_externos_paradero(Paradero, MontoExt),
    MontoTotal is MontoEst + MontoExt.

% Monto recaudado en un tramo
monto_tramo_inclusivo(ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, _, _),
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).

% ===============================================
% REGLAS DE ANÁLISIS AVANZADO MEJORADAS
% ===============================================

% Paradero con mayor cantidad de mujeres estudiantes
paradero_mas_mujeres_estudiantes(Paradero, Cantidad) :-
    findall(Cant-Par, 
           (paradero(Par, _), 
            contar_pasajeros_tipo_genero(Par, estudiante, mujer, Cant)), 
           Lista),
    max_pair_value(Lista, Cantidad-Paradero).

% Paradero con mayor pérdida por cobros escolares
paradero_mayor_perdida_escolar(Paradero, MaxPerdida) :-
    findall(Perdida-Par, 
           (paradero(Par, _), 
            perdida_cobros_escolares(Par, Perdida)), 
           Lista),
    max_pair_value(Lista, MaxPerdida-Paradero).

% Calcular total hipotético si todos los estudiantes pagaran tarifa completa
total_hipotetico_estudiantes(Total) :-
    findall(Costo, 
           (sube(_, Par, estudiante, _), 
            costo_general(Par, Costo)), 
           Costos),
    sum_list(Costos, Total).

% Pasajeros que suben en ventanilla pero no bajan en universitaria
pasajeros_ventanilla_no_universitaria(Lista) :-
    findall(Nombre, 
           (sube(Nombre, ventanilla, _, _), 
            \+ baja(Nombre, universitaria)), 
           Lista).

% Paradero con mayor ganancia
paradero_mayor_ganancia(Paradero, MaxMonto) :-
    findall(Monto-Par, 
           (paradero(Par, _), 
            Par \= unmsm, 
            Par \= universitaria,
            monto_total_paradero(Par, Monto)), 
           Pares),
    max_pair_value(Pares, MaxMonto-Paradero).

% Pérdida por cobros escolares (diferencia entre tarifa completa y estudiantil)
perdida_cobros_escolares(Paradero, Perdida) :-
    findall(Diferencia,
           (sube(_, Paradero, estudiante, _),
            costo_general(Paradero, CostoCompleto),
            costo_estudiante(Paradero, CostoEstudiante),
            Diferencia is CostoCompleto - CostoEstudiante),
           Diferencias),
    sum_list(Diferencias, Perdida).

% Paradero con mejor ratio suben/bajan
paradero_mejor_ratio(Paradero, MaxRatio) :-
    findall(Ratio-Par, 
           (paradero(Par, _), 
            total_suben_paradero(Par, Suben), 
            total_bajan_paradero(Par, Bajan), 
            Bajan > 0, 
            Ratio is Suben / Bajan), 
           Lista),
    max_pair_value(Lista, MaxRatio-Paradero).

% Paradero con menor promedio de pago por pasajero
paradero_menor_promedio_pago(Paradero, MinProm) :-
    findall(Prom-Par, 
           (paradero(Par, _), 
            monto_total_paradero(Par, Monto), 
            total_suben_paradero(Par, Suben), 
            Suben > 0, 
            Prom is Monto / Suben), 
           Lista),
    min_pair_value(Lista, MinProm-Paradero).

% Paradero que más externos lleva a universitaria
paradero_mas_externos_universitaria(Paradero, Cantidad) :-
    findall(Cant-Par, 
           (paradero(Par, _), 
            findall(Nombre, 
                   (sube(Nombre, Par, externo, _), 
                    baja(Nombre, universitaria)), 
                   L), 
            length(L, Cant)), 
           Lista),
    max_pair_value(Lista, Cantidad-Paradero).

% Porcentaje de mujeres en un tramo
porcentaje_mujeres_tramo(ParaderoInicio, ParaderoFin, Porcentaje) :-
    todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, TodosLista),
    include(es_mujer, TodosLista, MujeresList),
    length(MujeresList, CantMujeres),
    length(TodosLista, Total),
    Total > 0,
    Porcentaje is (CantMujeres * 100) / Total.

% Pasajeros con nombre que coincide parcialmente con su paradero
pasajeros_nombre_coincide_paradero(Lista) :-
    findall(Nombre-Par, 
           (sube(Nombre, Par, _, _), 
            atom_chars(Nombre, CharsNombre),
            atom_chars(Par, CharsPar),
            intersection(CharsNombre, CharsPar, Comunes),
            length(Comunes, LenComunes),
            LenComunes >= 3), 
           Lista).

% Estudiante que no baja en UNMSM (caso especial)
estudiante_no_baja_unmsm(Nombre) :-
    sube(Nombre, _, estudiante, _),
    \+ baja(Nombre, unmsm).

% Historial completo de un pasajero (dónde sube y baja)
historial_pasajero(Nombre, sube_en(ParaderoSube), baja_en(ParaderoBaja)) :-
    sube(Nombre, ParaderoSube, _, _),
    baja(Nombre, ParaderoBaja).

% Predicados compuestos para consultas frecuentes
es_mujer_estudiante(Nombre) :-
    es_mujer(Nombre),
    sube(Nombre, _, estudiante, _).

es_varon_externo(Nombre) :-
    es_varon(Nombre),
    sube(Nombre, _, externo, _).

% Consulta genérica para cualquier tramo y condición
consulta_tramo(ParaderoInicio, ParaderoFin, Condicion, Porcentaje) :-
    todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, L),
    porcentaje_en_lista(L, Condicion, Porcentaje).

% ===============================================
% CONSULTAS DE EJEMPLO Y UTILIDADES
% ===============================================

% Mostrar información completa de un paradero
info_paradero(Paradero) :-
    write('=== INFORMACIÓN DEL PARADERO: '), write(Paradero), nl,
    total_suben_paradero(Paradero, TotalSuben),
    total_bajan_paradero(Paradero, TotalBajan),
    monto_total_paradero(Paradero, MontoTotal),
    write('Total que suben: '), write(TotalSuben), nl,
    write('Total que bajan: '), write(TotalBajan), nl,
    write('Monto total recaudado: S/'), write(MontoTotal), nl,
    porcentaje_mujeres_universitarias(Paradero, PorcMujUniv),
    write('% Mujeres universitarias: '), write(PorcMujUniv), write('%'), nl,
    porcentaje_varones_universitarios(Paradero, PorcVarUniv),
    write('% Varones universitarios: '), write(PorcVarUniv), write('%'), nl.

% Ayuda con ejemplos de consultas (actualizada)
ayuda :-
    nl,
    write('=== SISTEMA EXPERTO DE PARADEROS (VERSIÓN MEJORADA) ==='), nl,
    write('Ejemplos de consultas:'), nl, nl,
    write('1. Análisis avanzado:'), nl,
    write('   ?- paradero_mas_mujeres_estudiantes(P, C).'), nl,
    write('   ?- paradero_mayor_perdida_escolar(P, M).'), nl,
    write('   ?- paradero_mejor_ratio(P, R).'), nl,
    write('   ?- paradero_menor_promedio_pago(P, Prom).'), nl, nl,
    write('2. Consultas especiales:'), nl,
    write('   ?- total_hipotetico_estudiantes(T).'), nl,
    write('   ?- pasajeros_ventanilla_no_universitaria(L).'), nl,
    write('   ?- estudiante_no_baja_unmsm(N).'), nl,
    write('   ?- porcentaje_mujeres_tramo(ventanilla, carmen_de_la_legua_reynoso, P).'), nl, nl,
    write('3. Búsquedas específicas:'), nl,
    write('   ?- pasajeros_nombre_coincide_paradero(L).'), nl,
    write('   ?- paradero_mas_externos_universitaria(P, C).'), nl.      
      
      `,
      sampleQueries: [
        "total_suben_paradero(ventanilla, Total).",
        "porcentaje_mujeres_universitarias(san_jose, Porcentaje).",
        "monto_total_paradero(urb_industrial_oquendo, MontoTotal).",
      ],
    },
  },
  "14": {
    "sistema-minas": {
      title: "Sistema de Minas",
      description:
        "Sistema de peración minera, con consultas sobre genealogía, distribución de la fuerza laboral y valor de la producción en secciones y zonas.",
      initialProgram: `
% --------------
% CLAN FAMILIAR
% --------------
      
:- use_module(library(lists)).

    
% Padres
padre(ludwig, gretel).
padre(ludwig, hans).
padre(ludwig, katerina).
padre(ludwig, erik).
padre(ludwig, elsa).

padre(albrecht, bruno).
padre(albrecht, monika).

padre(wilhelm, julian).
padre(wilhelm, felix).
padre(wilhelm, isabella).

padre(bruno, leon).
padre(bruno, sofia).
padre(bruno, maximilian).
padre(bruno, elena).

padre(leon, lara).

% Madres
madre(helga, gretel).
madre(helga, hans).
madre(helga, katerina).
madre(helga, erik).
madre(helga, elsa).

madre(frieda, bruno).
madre(frieda, monika).

madre(elsa, leon).
madre(elsa, sofia).
madre(elsa, maximilian).
madre(elsa, elena).

madre(sofia, julian).
madre(sofia, felix).
madre(sofia, isabella).

madre(amelia, lara).

% Género
sexo(ludwig, hombre).
sexo(helga, mujer).
sexo(albrecht, hombre).
sexo(frieda, mujer).
sexo(gretel, mujer).
sexo(hans, hombre).
sexo(katerina, mujer).
sexo(erik, hombre).
sexo(elsa, mujer).
sexo(bruno, hombre).
sexo(monika, mujer).
sexo(amelia, mujer).
sexo(wilhelm, hombre).
sexo(julian, hombre).
sexo(felix, hombre).
sexo(isabella, mujer).
sexo(leon, hombre).
sexo(sofia, mujer).
sexo(maximilian, hombre).
sexo(elena, mujer).
sexo(lara, mujer).

% -------------------------------------
% SECCIONES DE LA MINA Y ZONAS
% -------------------------------------

% seccion(Seccion, Zona)
seccion(extraccion, 1).
seccion(ventilacion, 1).
seccion(geologia, 2).
seccion(ingenieria, 2).
seccion(supervision, 3).
seccion(transporte, 3).
seccion(mantenimiento, 3).
seccion(clasificacion, 3).
seccion(tallado, 4).
seccion(joyeria, 4).
seccion(seguridad, 4).
seccion(logistica, 5).
seccion(administracion, 6).
seccion(ventas, 5).

% -------------------------------------
% PUESTOS DE CADA PERSONA
% -------------------------------------

% puesto(Persona, Seccion)
puesto(elsa, extraccion).
puesto(gretel, extraccion).
puesto(felix, ventilacion).
puesto(lara, geologia).
puesto(monika, geologia).
puesto(leon, ingenieria).
puesto(isabella, supervision).
puesto(amelia, supervision).
puesto(sofia, supervision).
puesto(albrecht, transporte).
puesto(katerina, clasificacion).
puesto(hans, clasificacion).
puesto(wilhelm, mantenimiento).
puesto(julian, tallado).
puesto(erik, joyeria).
puesto(bruno, logistica).
puesto(maximilian, logistica).
puesto(katerina, administracion).
puesto(frieda, administracion).
puesto(ludwig, ventas).
puesto(helga, ventas).
puesto(elena, seguridad).

% -------------------------------------
% REGLAS AUXILIARES
% -------------------------------------

% Progenitor (padre o madre)
progenitor(P, Hijo) :- padre(P, Hijo).
progenitor(P, Hijo) :- madre(P, Hijo).

% Descendiente
descendiente(X, Y) :- progenitor(Y, X).
descendiente(X, Y) :- progenitor(P, X), descendiente(P, Y).

% Saber en qué zona trabaja una persona
trabaja_en_zona(Persona, Zona) :-
    puesto(Persona, Seccion),
    seccion(Seccion, Zona).

% Obtener personas que trabajan en una zona
personas_en_zona(Zona, Persona) :-
    seccion(Seccion, Zona),
    puesto(Persona, Seccion).

% Hermanos (comparten un progenitor)
hermano(X, Y) :-
    padre(P, X), padre(P, Y),
    madre(M, X), madre(M, Y),
    X \= Y.

% Abuelos
abuelo(A, N) :- padre(A, P), progenitor(P, N).
abuela(A, N) :- madre(A, P), progenitor(P, N).

% Reglas para nieto y bisnieto
nieto(Nieto, Abuelo) :- progenitor(Abuelo, Padre), progenitor(Padre, Nieto).
bisnieto(BisNieto, BisAbuelo) :- progenitor(BisAbuelo, Abuelo), progenitor(Abuelo, Padre), progenitor(Padre, BisNieto).

% ------------------------------------------
% Personas que trabajan después de una zona
% ------------------------------------------
personas_despues(Zona, Lista) :-
    findall(Persona,
            (puesto(Persona, S), seccion(S, ZonaS), ZonaS > Zona),
            Lista).

personas_despues_inmediato(Zona, Lista) :-
    SiguienteZona is Zona + 1,
    findall(Persona,
            (puesto(Persona, S), seccion(S, SiguienteZona)),
            Lista).

% ------------------------------------------
% Personas que trabajan entre dos zonas
% ------------------------------------------
personas_entre_exclusivo(Z1, Z2, Lista) :-
    findall(Persona,
            (puesto(Persona, S), seccion(S, Zona),
             Zona > Z1, Zona < Z2),
            Lista).

personas_entre_inclusivo(Z1, Z2, Lista) :-
    findall(Persona,
            (puesto(Persona, S), seccion(S, Zona),
             Zona >= Z1, Zona =< Z2),
            Lista).

% --------------------------------------------
% Secciones que están después de una zona
% --------------------------------------------
secciones_despues(Zona, Lista) :-
    findall(S,
            (seccion(S, ZonaS), ZonaS > Zona),
            Lista).

secciones_despues_inmediato(Zona, Lista) :-
    SiguienteZona is Zona + 1,
    findall(S,
            seccion(S, SiguienteZona),
            Lista).

% ----------------------------------------
% Secciones que están entre dos zonas
% ----------------------------------------
secciones_entre_exclusivo(Z1, Z2, Lista) :-
    findall(S,
            (seccion(S, Zona), Zona > Z1, Zona < Z2),
            Lista).

secciones_entre_inclusivo(Z1, Z2, Lista) :-
    findall(S,
            (seccion(S, Zona), Zona >= Z1, Zona =< Z2),
            Lista).

% Hermano con su puesto y zona
hermanos_y_sus_puestos(Persona, Hermano, Seccion, Zona) :-
    hermano(Persona, Hermano),
    puesto(Hermano, Seccion),
    seccion(Seccion, Zona).

% -----------------------
% Descendientes en la mina
% -----------------------
descendientes_despues_zona(Ancestro, Zona, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Sect),
         seccion(Sect, Z),
         Z > Zona),
    Lista).

descendientes_despues_inmediato(Ancestro, Zona, Lista) :-
    Siguiente is Zona + 1,
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Sect),
         seccion(Sect, Siguiente)),
    Lista).

descendientes_en_zona(Ancestro, Zona, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Sect),
         seccion(Sect, Zona)),
    Lista).

descendientes_entre_exclusivo(Ancestro, Zona1, Zona2, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Sect),
         seccion(Sect, Zona),
         Zona > Zona1,
         Zona < Zona2),
    Lista).

descendientes_entre_inclusivo(Ancestro, Zona1, Zona2, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Sect),
         seccion(Sect, Zona),
         Zona >= Zona1,
         Zona =< Zona2),
    Lista).

% Descendientes con filtro de género
descendientes_por_genero_despues_zona(Ancestro, Zona, Genero, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Sect),
         seccion(Sect, Z),
         Z > Zona),
    Lista).

descendientes_por_genero_despues_inmediato(Ancestro, Zona, Genero, Lista) :-
    ZonaSig is Zona + 1,
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Sect),
         seccion(Sect, ZonaSig)),
    Lista).

descendientes_por_genero_en_zona(Ancestro, Zona, Genero, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Sect),
         seccion(Sect, Zona)),
    Lista).

descendientes_por_genero_entre_exclusivo(Ancestro, Zona1, Zona2, Genero, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Sect),
         seccion(Sect, Zona),
         Zona > Zona1,
         Zona < Zona2),
    Lista).

descendientes_por_genero_entre_inclusivo(Ancestro, Zona1, Zona2, Genero, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Sect),
         seccion(Sect, Zona),
         Zona >= Zona1,
         Zona =< Zona2),
    Lista).

descendientes_en_zona_y_seccion(Ancestro, Zona, Seccion, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         puesto(D, Seccion),
         seccion(Seccion, Zona)),
    Lista).

descendientes_en_zona_y_seccion_genero(Ancestro, Zona, Seccion, Genero, Lista) :-
    findall(D,
        (descendiente(D, Ancestro),
         sexo(D, Genero),
         puesto(D, Seccion),
         seccion(Seccion, Zona)),
    Lista).

% Nietos
nietos_en_zona(Persona, Zona, Lista) :-
    findall(N,
        (nieto(N, Persona),
         puesto(N, Sect),
         seccion(Sect, Zona)),
    Lista).

nietos_despues_zona(Abuelo, Zona, Lista) :-
    findall(N,
        (nieto(N, Abuelo),
         puesto(N, Sect),
         seccion(Sect, Z),
         Z > Zona),
    Lista).

% Bisnietos
bisnietos_en_zona(Persona, Zona, Lista) :-
    findall(BN,
        (bisnieto(BN, Persona),
         puesto(BN, Sect),
         seccion(Sect, Zona)),
    Lista).

bisnietos_despues_zona(Abuelo, Zona, Lista) :-
    findall(BN,
        (bisnieto(BN, Abuelo),
         puesto(BN, Sect),
         seccion(Sect, Z),
         Z > Zona),
    Lista).

% ----------- MÓDULO DE CONTEO -------------

contar_lista(Lista, Total) :- length(Lista, Total).

% Descendientes
cantidad_descendientes_despues(Ancestro, Zona, Total) :-
    descendientes_despues_zona(Ancestro, Zona, Lista),
    contar_lista(Lista, Total).

cantidad_descendientes_en_zona(Ancestro, Zona, Total) :-
    descendientes_en_zona(Ancestro, Zona, Lista),
    contar_lista(Lista, Total).

% Nietos
cantidad_nietos_despues(Ancestro, Zona, Total) :-
    nietos_despues_zona(Ancestro, Zona, Lista),
    contar_lista(Lista, Total).

% Bisnietos
cantidad_bisnietos_despues(Ancestro, Zona, Total) :-
    bisnietos_despues_zona(Ancestro, Zona, Lista),
    contar_lista(Lista, Total).

% Consultas de conteo adicionales
cantidad_personas_en_seccion(Seccion, Total) :-
    findall(P, puesto(P, Seccion), Lista),
    contar_lista(Lista, Total).

cantidad_personas_por_genero_en_zona(Zona, Genero, Total) :-
    findall(P, (puesto(P, S), seccion(S, Zona), sexo(P, Genero)), Lista),
    contar_lista(Lista, Total).

% --------------------------------
% VALOR DE PRODUCCIÓN POR SECCIÓN
% --------------------------------

costo_seccion(extraccion, 1000).
costo_seccion(ventilacion, 500).
costo_seccion(geologia, 1200).
costo_seccion(ingenieria, 1500).
costo_seccion(supervision, 800).
costo_seccion(transporte, 750).
costo_seccion(mantenimiento, 600).
costo_seccion(clasificacion, 2000).
costo_seccion(tallado, 3000).
costo_seccion(joyeria, 5000).
costo_seccion(seguridad, 400).
costo_seccion(logistica, 900).
costo_seccion(administracion, 1100).
costo_seccion(ventas, 2500).

valor_produccion_persona(Persona, Valor) :-
    puesto(Persona, Seccion),
    costo_seccion(Seccion, Valor).

% Valor total de producción
valor_total_produccion(ListaPersonas, Total) :-
    findall(V,
        (member(Persona, ListaPersonas),
         valor_produccion_persona(Persona, V)),
        Valores),
    sumlist(Valores, Total).

% Valor de producción por género
valor_produccion_hombres(ListaPersonas, Total) :-
    findall(V,
        (member(Persona, ListaPersonas),
         sexo(Persona, hombre),
         valor_produccion_persona(Persona, V)),
        Valores),
    sumlist(Valores, Total).

valor_produccion_mujeres(ListaPersonas, Total) :-
    findall(V,
        (member(Persona, ListaPersonas),
         sexo(Persona, mujer),
         valor_produccion_persona(Persona, V)),
        Valores),
    sumlist(Valores, Total).

% Valor de producción por zona
valor_produccion_por_zona(Zona, Total) :-
    findall(V,
        (puesto(Persona, Seccion),
         seccion(Seccion, Zona),
         valor_produccion_persona(Persona, V)),
    Valores),
    sumlist(Valores, Total).

% Valor de producción por sección
valor_produccion_total_seccion(Seccion, Total) :-
    findall(V,
        (puesto(Persona, Seccion),
         valor_produccion_persona(Persona, V)),
    Valores),
    sumlist(Valores, Total).

% Reporte de valor de producción por sección
reporte_valor_produccion_secciones(Lista) :-
    findall((Seccion, Total),
        (seccion(Seccion, _), valor_produccion_total_seccion(Seccion, Total)),
    Lista).

% Consultas de valor de producción adicionales
valor_produccion_mujeres_en_zona(Zona, Total) :-
    findall(P, (puesto(P, S), seccion(S, Zona), sexo(P, mujer)), Mujeres),
    valor_total_produccion(Mujeres, Total).

valor_produccion_hombres_en_zona(Zona, Total) :-
    findall(P, (puesto(P, S), seccion(S, Zona), sexo(P, hombre)), Hombres),
    valor_total_produccion(Hombres, Total).

valor_produccion_secciones_despues_zona(Zona, Total) :-
    findall(S, (seccion(S, Z), Z > Zona), Secciones),
    findall(V, (member(S, Secciones), valor_produccion_total_seccion(S, V)), Valores),
    sumlist(Valores, Total).

% NUEVAS CONSULTAS ADICIONALES
personas_en_zona_por_genero(Zona, Genero, Lista) :-
    findall(P, (puesto(P, S), seccion(S, Zona), sexo(P, Genero)), Lista).

secciones_en_zona(Zona, Lista) :-
    findall(S, seccion(S, Zona), Lista).

puestos_por_genero(Genero, Lista) :-
    findall((Persona, Seccion), (puesto(Persona, Seccion), sexo(Persona, Genero)), Lista).

valor_produccion_por_genero_en_seccion(Seccion, Genero, Total) :-
    findall(P, (puesto(P, Seccion), sexo(P, Genero)), Personas),
    valor_total_produccion(Personas, Total).

total_valor_mina(Total) :-
    findall(V, valor_produccion_por_zona(_, V), Valores),
    sumlist(Valores, Total).



      `,
      sampleQueries: [
        "progenitor(ludwig, Hijo), puesto(Hijo, Seccion), seccion(Seccion, Zona).",
      ],
    },
    "sistema-combinado": {
      title: "Sistema Experto de Paraderos y Árbol Genealógico",
      description: "Arbol genealogico y paraderos de transporte público",
      imageUrl:
        "https://www.canva.com/design/DAGraCYNUpA/zEcWxqplFJqilhqqt1Ar7A/edit?ui=eyJIIjp7IkEiOnRydWV9fQ",
      initialProgram: `
% ===============================================
% SISTEMA EXPERTO DE PARADEROS - TRANSPORTE PÚBLICO (VERSIÓN MEJORADA)
% ===============================================

:- use_module(library(lists)).
% HECHOS BASE: Definición de paraderos y sus posiciones
paradero(ventanilla, 1).
paradero(marquez, 2).
paradero(urb_industrial_oquendo, 3).
paradero(carmen_de_la_legua_reynoso, 4).
paradero(puente_colonial, 5).
paradero(san_jose, 6).
paradero(unmsm, 7).
paradero(universitaria, 8).


% ===============================================
% HECHOS: GENEALOGÍA
% Formato: progenitor(Progenitor, Hijo).
% ===============================================

progenitor(felix, axel).
progenitor(aurora, axel).
progenitor(felix, hugo).
progenitor(aurora, hugo).
progenitor(indira, bianca).
progenitor(isaac, bianca).
progenitor(hugo, marilu).
progenitor(hugo, renzo).
progenitor(hugo, lia).
progenitor(bianca, marilu).
progenitor(bianca, renzo).
progenitor(bianca, lia).
progenitor(lia, melany).
progenitor(alex, melany).
progenitor(emir, ana).
progenitor(ana, alex).
progenitor(ana, joel).
progenitor(joel, vania).
progenitor(giselle, vania).
progenitor(dafne, giselle).
progenitor(dafne, carmen).
progenitor(dafne, karina).
progenitor(karina, nayeli).
progenitor(alonso, nayeli).
progenitor(mateo, samuel).
progenitor(araceli, samuel).
progenitor(evelyn, noelia).
progenitor(evelyn, luna).
progenitor(leandro, noelia).
progenitor(leandro, luna).
progenitor(samuel, alonso).
progenitor(noelia, alonso).
progenitor(alejandro, lucio).
progenitor(alejandro, jesus).
progenitor(marilu, lucio).
progenitor(marilu, jesus).



% HECHOS: Pasajeros que suben en cada paradero
% Formato: sube(Nombre, Paradero, Tipo, Genero)
% Tipo: estudiante/externo, Genero: mujer/varon


% VENTANILLA
sube(ana, ventanilla, externo, mujer).
sube(marilu, ventanilla, externo, mujer).
sube(nayeli, ventanilla, externo, mujer).
sube(mateo, ventanilla, externo, varon).
sube(isaac, ventanilla, estudiante, varon).
sube(aurora, ventanilla, estudiante, mujer).
sube(bianca, ventanilla, estudiante, mujer).
sube(alejandro, ventanilla, externo, varon).


% MARQUEZ
sube(samuel, marquez, externo, varon).
sube(manuel, marquez, externo, varon).
sube(luna, marquez, externo, mujer).
sube(noelia, marquez, estudiante, mujer).
sube(alonso, marquez, estudiante, varon).


% URB INDUSTRIAL OQUENDO
sube(leandro, urb_industrial_oquendo, externo, varon).
sube(dafne, urb_industrial_oquendo, externo, mujer).
sube(araceli, urb_industrial_oquendo, estudiante, mujer).
sube(indira, urb_industrial_oquendo, estudiante, mujer).
sube(axel, urb_industrial_oquendo, estudiante, varon).
sube(jesus, urb_industrial_oquendo, externo, varon).
sube(lucio, urb_industrial_oquendo, estudiante, varon).



% CARMEN DE LA LEGUA REYNOSO
sube(joel, carmen_de_la_legua_reynoso, externo, varon).
sube(emir, carmen_de_la_legua_reynoso, externo, varon).
sube(carmen, carmen_de_la_legua_reynoso, externo, mujer).
sube(karina, carmen_de_la_legua_reynoso, externo, mujer).
sube(giselle, carmen_de_la_legua_reynoso, estudiante, mujer).
sube(alex, carmen_de_la_legua_reynoso, estudiante, varon).
sube(felix, carmen_de_la_legua_reynoso, estudiante, varon).


% PUENTE COLONIAL
sube(lia, puente_colonial, externo, mujer).
sube(melany, puente_colonial, externo, mujer).
sube(vania, puente_colonial, estudiante, mujer).
sube(dilan, puente_colonial, estudiante, varon).


% SAN JOSÉ
sube(hugo, san_jose, externo, varon).
sube(renzo, san_jose, externo, varon).
sube(evelyn, san_jose, estudiante, mujer).
sube(derek, san_jose, estudiante, varon).


% HECHOS: Pasajeros que bajan en cada paradero
% Formato: baja(Nombre, Paradero)


% MARQUEZ
baja(ana, marquez).
baja(mateo, marquez).
baja(alejandro, marquez).


% URB INDUSTRIAL OQUENDO
baja(nayeli, urb_industrial_oquendo).
baja(samuel, urb_industrial_oquendo).


% CARMEN DE LA LEGUA REYNOSO
baja(marilu, carmen_de_la_legua_reynoso).
baja(leandro, carmen_de_la_legua_reynoso).


% PUENTE COLONIAL
baja(dafne, puente_colonial).
baja(lucio, puente_colonial).
baja(jesus, puente_colonial).


% SAN JOSÉ
baja(luna, san_jose).
baja(alex, san_jose).


% UNMSM (Todos los estudiantes bajan aquí)
baja(evelyn, unmsm).
baja(derek, unmsm).
baja(vania, unmsm).
baja(dilan, unmsm).
baja(giselle, unmsm).
baja(felix, unmsm).
baja(araceli, unmsm).
baja(indira, unmsm).
baja(axel, unmsm).
baja(noelia, unmsm).
baja(alonso, unmsm).
baja(isaac, unmsm).
baja(aurora, unmsm).
baja(bianca, unmsm).


% UNIVERSITARIA (Los externos restantes)
baja(manuel, universitaria).
baja(joel, universitaria).
baja(emir, universitaria).
baja(carmen, universitaria).
baja(karina, universitaria).
baja(lia, universitaria).
baja(melany, universitaria).
baja(hugo, universitaria).
baja(renzo, universitaria).


% Regla para determinar si una persona es descendiente de un ancestro.
es_descendiente(Ancestro, Descendiente) :-
    progenitor(Ancestro, Descendiente). % Caso base: es un hijo directo.


es_descendiente(Ancestro, Descendiente) :-
    progenitor(Ancestro, Intermedio), % Existe un hijo intermedio
    es_descendiente(Intermedio, Descendiente). % y el Descendiente es descendiente de ese hijo.

% ===============================================
% NUEVAS REGLAS DE GENEALOGÍA
% ===============================================

% madre(Madre, Hijo) es verdadero si Madre es progenitor de Hijo y su género es mujer.
madre(Madre, Hijo) :-
    progenitor(Madre, Hijo),
    sube(Madre, _, _, mujer).

% padre(Padre, Hijo) es verdadero si Padre es progenitor de Hijo y su género es varon.
padre(Padre, Hijo) :-
    progenitor(Padre, Hijo),
    sube(Padre, _, _, varon).

% hermanos(Persona1, Persona2) es verdadero si ambas personas comparten el mismo progenitor
% y no son la misma persona.
hermanos(Persona1, Persona2) :-
    progenitor(Progenitor, Persona1),
    progenitor(Progenitor, Persona2),
    Persona1 \= Persona2.
    
hermano(Hermano, Persona) :-
    hermanos(Hermano, Persona),
    sube(Hermano, _, _, varon).

hermana(Hermana, Persona) :-
    hermanos(Hermana, Persona),
    sube(Hermana, _, _, mujer).

% --- Tíos y Tías ---
tio(Tio, Sobrino) :-
    progenitor(Progenitor, Sobrino),
    hermano(Tio, Progenitor).

tia(Tia, Sobrino) :-
    progenitor(Progenitor, Sobrino),
    hermana(Tia, Progenitor).

% --- Tíos Abuelos y Tías Abuelas ---
tio_abuelo(TioAbuelo, SobrinoNieto) :-
    (abuelo(Abuelo, SobrinoNieto) ; abuela(Abuelo, SobrinoNieto)),
    hermano(TioAbuelo, Abuelo).

tia_abuela(TiaAbuela, SobrinoNieto) :-
    (abuelo(Abuelo, SobrinoNieto) ; abuela(Abuelo, SobrinoNieto)),
    hermana(TiaAbuela, Abuelo).

sube_despues_de(Persona, ParaderoInicio) :-
    sube(Persona, ParaderoSube,_,_),
    paradero(ParaderoInicio, PosInicio),
    paradero(ParaderoSube, PosSube),
    PosSube > PosInicio.
   
% Verdadero si Persona baja en un paradero posterior a ParaderoInicio.
baja_despues_de(Persona, ParaderoInicio) :-
    baja(Persona, ParaderoBaja),               % Dónde baja la persona
    paradero(ParaderoInicio, PosInicio),       % Obtiene la posición del paradero de inicio
    paradero(ParaderoBaja, PosBaja),           % Obtiene la posición del paradero de bajada
    PosBaja > PosInicio.                     % Compara las posiciones.
% Cuenta la cantidad de descendientes de un Ancestro que bajaron después de ParaderoInicio.
cantidad_descendientes_bajan_despues_de(Ancestro, ParaderoInicio, Cantidad) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            baja_despues_de(Descendiente, ParaderoInicio)),
           ListaDescendientes),
    length(ListaDescendientes, Cantidad).


cantidad_descendientes_suben_despues_de(Ancestro, ParaderoInicio, Cantidad) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            sube_despues_de(Descendiente, ParaderoInicio)),
            ListaDescendientes),
    length(ListaDescendientes, Cantidad).
% Verdadero si Persona sube en un paradero anterior a ParaderoFin.
sube_antes_de(Persona, ParaderoFin) :-
    sube(Persona, ParaderoSube, _, _),
    paradero(ParaderoSube, PosSube),
    paradero(ParaderoFin, PosFin),
    PosSube < PosFin.

% Verdadero si Persona baja en un paradero anterior a ParaderoFin.
baja_antes_de(Persona, ParaderoFin) :-
    baja(Persona, ParaderoBaja),
    paradero(ParaderoBaja, PosBaja),
    paradero(ParaderoFin, PosFin),
    PosBaja < PosFin.
% Lista los descendientes que suben en un paradero anterior a ParaderoFin.
listar_descendientes_suben_antes_de(Ancestro, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            sube_antes_de(Descendiente, ParaderoFin)),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes). % Elimina duplicados para una lista limpia

% Lista los descendientes que bajan en un paradero anterior a ParaderoFin.
listar_descendientes_bajan_antes_de(Ancestro, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            baja_antes_de(Descendiente, ParaderoFin)),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes). % Elimina duplicados para una lista limpia
% Cantidad de descendientes que suben antes de un paradero.
cantidad_descendientes_suben_antes_de(Ancestro, ParaderoFin, Cantidad) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            sube_antes_de(Descendiente, ParaderoFin)),
            ListaDescendientes),
    length(ListaDescendientes, Cantidad).

% Cantidad de descendientes que bajan antes de un paradero.
cantidad_descendientes_bajan_antes_de(Ancestro, ParaderoFin, Cantidad) :-
    findall(Descendiente,
           (es_descendiente(Ancestro, Descendiente),
            baja_antes_de(Descendiente, ParaderoFin)),
            ListaDescendientes),
    length(ListaDescendientes, Cantidad).

% Regla que encuentra en qué paradero sube un descendiente de una persona.
% paradero_sube_descendiente(Ancestro, Descendiente, Paradero)
paradero_sube_descendiente(Ancestro, Descendiente, Paradero) :-
    es_descendiente(Ancestro, Descendiente),
    sube(Descendiente, Paradero, _, _).

% descendientes_suben_entre_paraderos(Ancestro, Inicio, Fin, Lista)
% Encuentra la lista de descendientes de un Ancestro que suben al bus
% en un paradero que está entre Inicio y Fin (ambos inclusive).
descendientes_suben_entre_paraderos(Ancestro, ParaderoInicio, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sube(Descendiente, ParaderoDeSubida, _, _),
              en_rango_inclusivo(ParaderoDeSubida, ParaderoInicio, ParaderoFin)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes). % Elimina duplicados para una lista limpia


% descendientes_bajan_entre_paraderos(Ancestro, Inicio, Fin, Lista)
% Encuentra la lista de descendientes de un Ancestro que bajan del bus
% en un paradero que está entre Inicio y Fin (ambos inclusive).
descendientes_bajan_entre_paraderos(Ancestro, ParaderoInicio, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              baja(Descendiente, ParaderoDeBajada),
              en_rango_inclusivo(ParaderoDeBajada, ParaderoInicio, ParaderoFin)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).


% ===============================================
% REGLAS DE CONSULTA BÁSICAS
% ===============================================


% Contar pasajeros por tipo y género en un paradero
contar_pasajeros_tipo_genero(Paradero, Tipo, Genero, Cantidad) :-
    findall(Nombre, sube(Nombre, Paradero, Tipo, Genero), Lista),
    length(Lista, Cantidad).


% Listar pasajeros por tipo y género en un paradero
listar_pasajeros_tipo_genero(Paradero, Tipo, Genero, Lista) :-
    findall(Nombre, sube(Nombre, Paradero, Tipo, Genero), Lista).


% Total de pasajeros que suben en un paradero
total_suben_paradero(Paradero, Total) :-
    findall(Nombre, sube(Nombre, Paradero, _, _), Lista),
    length(Lista, Total).


% Total de pasajeros que bajan en un paradero
total_bajan_paradero(Paradero, Total) :-
    findall(Nombre, baja(Nombre, Paradero), Lista),
    length(Lista, Total).


% ===============================================
% REGLAS AUXILIARES NUEVAS
% ===============================================


% Predicado para verificar si un pasajero es mujer
es_mujer(Nombre) :-
    sube(Nombre, _, _, mujer).


% Predicado para verificar si un pasajero es varón
es_varon(Nombre) :-
    sube(Nombre, _, _, varon).


% Predicado para contar elementos en una lista
count(_, [], 0).
count(X, [X|T], N) :-
    count(X, T, N1),
    N is N1 + 1.
count(X, [H|T], N) :-
    X \= H,
    count(X, T, N).


% Encontrar el máximo en una lista de pares Valor-Clave
max_pair_value(Lista, MaxValor-MaxClave) :-
    Lista = [Primer|Resto],
    max_pair_helper(Resto, Primer, MaxValor-MaxClave).


max_pair_helper([], MaxActual, MaxActual).
max_pair_helper([Valor-Clave|Resto], ValorActual-ClaveActual, MaxFinal) :-
    (Valor > ValorActual ->
        max_pair_helper(Resto, Valor-Clave, MaxFinal)
    ;   max_pair_helper(Resto, ValorActual-ClaveActual, MaxFinal)
    ).


% Encontrar el mínimo en una lista de pares Valor-Clave
min_pair_value(Lista, MinValor-MinClave) :-
    Lista = [Primer|Resto],
    min_pair_helper(Resto, Primer, MinValor-MinClave).


min_pair_helper([], MinActual, MinActual).
min_pair_helper([Valor-Clave|Resto], ValorActual-ClaveActual, MinFinal) :-
    (Valor < ValorActual ->
        min_pair_helper(Resto, Valor-Clave, MinFinal)
    ;   min_pair_helper(Resto, ValorActual-ClaveActual, MinFinal)
    ).


% ===============================================
% REGLAS DE PORCENTAJES
% ===============================================


% Porcentaje de mujeres universitarias en un paradero
porcentaje_mujeres_universitarias(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, mujer, MujeresUniv),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (MujeresUniv * 100) / Total.


% Porcentaje de varones universitarios en un paradero
porcentaje_varones_universitarios(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, varon, VaronesUniv),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (VaronesUniv * 100) / Total.


% Porcentaje de mujeres no universitarias en un paradero
porcentaje_mujeres_no_universitarias(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, externo, mujer, MujeresExt),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (MujeresExt * 100) / Total.


% Porcentaje de varones no universitarios en un paradero
porcentaje_varones_no_universitarios(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, externo, varon, VaronesExt),
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (VaronesExt * 100) / Total.


% Porcentaje total de mujeres en un paradero
porcentaje_total_mujeres(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, mujer, MujeresUniv),
    contar_pasajeros_tipo_genero(Paradero, externo, mujer, MujeresExt),
    TotalMujeres is MujeresUniv + MujeresExt,
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (TotalMujeres * 100) / Total.


% Porcentaje total de varones en un paradero
porcentaje_total_varones(Paradero, Porcentaje) :-
    contar_pasajeros_tipo_genero(Paradero, estudiante, varon, VaronesUniv),
    contar_pasajeros_tipo_genero(Paradero, externo, varon, VaronesExt),
    TotalVarones is VaronesUniv + VaronesExt,
    total_suben_paradero(Paradero, Total),
    Total > 0,
    Porcentaje is (TotalVarones * 100) / Total.


% Regla genérica para calcular porcentaje que cumple una condición en una lista
porcentaje_en_lista(Lista, Condicion, Porcentaje) :-
    include(Condicion, Lista, Filtrados),
    length(Filtrados, CantFiltrados),
    length(Lista, Total),
    Total > 0,
    Porcentaje is (CantFiltrados * 100) / Total.


% ===============================================
% REGLAS DE TRAMOS (EXCLUSIVOS E INCLUSIVOS)
% ===============================================


% Verificar si un paradero está en un rango (inclusivo)
en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin) :-
    paradero(ParaderoInicio, PosInicio),
    paradero(ParaderoFin, PosFin),
    paradero(Paradero, Pos),
    Pos >= PosInicio,
    Pos =< PosFin.


% Verificar si un paradero está en un rango (exclusivo)
en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin) :-
    paradero(ParaderoInicio, PosInicio),
    paradero(ParaderoFin, PosFin),
    paradero(Paradero, Pos),
    Pos >= PosInicio,
    Pos < PosFin.


% Listar pasajeros que subieron en un tramo (inclusivo)
pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, Tipo, Genero, Lista) :-
    findall(Nombre,
           (sube(Nombre, Paradero, Tipo, Genero),
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin)),
           Lista).


% Listar pasajeros que subieron en un tramo (exclusivo)
pasajeros_tramo_exclusivo(ParaderoInicio, ParaderoFin, Tipo, Genero, Lista) :-
    findall(Nombre,
           (sube(Nombre, Paradero, Tipo, Genero),
            en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin)),
           Lista).


% Listar todos los pasajeros en un tramo (sin filtro de tipo/género)
todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, Lista) :-
    findall(Nombre,
           (sube(Nombre, Paradero, _, _),
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin)),
           Lista).


todos_pasajeros_tramo_exclusivo(ParaderoInicio, ParaderoFin, Lista) :-
    findall(Nombre,
           (sube(Nombre, Paradero, _, _),
            en_rango_exclusivo(Paradero, ParaderoInicio, ParaderoFin)),
           Lista).
% Contar cuántos pasajeros de un género subieron en un tramo exclusivo
% (después de ParaderoInicio y antes de ParaderoFin)
contar_pasajeros_suben_tramo_genero(ParaderoInicio, ParaderoFin, Genero, Cantidad) :-
    pasajeros_tramo_exclusivo(ParaderoInicio, ParaderoFin, _, Genero, Lista),
    length(Lista, Cantidad).


% Listar pasajeros de un género que bajaron en un tramo inclusivo
pasajeros_bajan_tramo_genero(ParaderoInicio, ParaderoFin, Genero, Lista) :-
    findall(Nombre,
           (baja(Nombre, Paradero),
            sube(Nombre, _, _, Genero), % Se verifica el género del pasajero
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin)),
           Lista).


% Contar cuántos pasajeros de un género bajaron en un tramo inclusivo
contar_pasajeros_bajan_tramo_genero(ParaderoInicio, ParaderoFin, Genero, Cantidad) :-
    pasajeros_bajan_tramo_genero(ParaderoInicio, ParaderoFin, Genero, Lista),
    length(Lista, Cantidad).


% Contar pasajeros de un tipo (estudiante/externo) que subieron
% desde un paradero de inicio hasta el final de la ruta.
contar_pasajeros_suben_despues_de_tipo(ParaderoInicio, Tipo, Cantidad) :-
    % Usamos 'universitaria' como el fin de la ruta para subidas.
    pasajeros_tramo_inclusivo(ParaderoInicio, universitaria, Tipo, _, Lista),
    length(Lista, Cantidad).


% Listar pasajeros de un tipo que bajan después de un paradero de inicio.
pasajeros_bajan_despues_de_tipo(ParaderoInicio, Tipo, Lista) :-
    paradero(ParaderoInicio, PosInicio),
    findall(Nombre,
           (baja(Nombre, ParaderoBaja),
            paradero(ParaderoBaja, PosBaja),
            PosBaja > PosInicio, % Asegura que el paradero de bajada sea posterior
            sube(Nombre, _, Tipo, _)), % Verifica el tipo del pasajero
           Lista).


% Contar pasajeros de un tipo que bajan después de un paradero de inicio.
contar_pasajeros_bajan_despues_de_tipo(ParaderoInicio, Tipo, Cantidad) :-
    pasajeros_bajan_despues_de_tipo(ParaderoInicio, Tipo, Lista),
    length(Lista, Cantidad).


% ===============================================
% REGLAS DE CÁLCULOS MONETARIOS
% ===============================================


% Calcular monto de un pasajero específico
% monto_pasajero(Nombre, Monto) :-
%    sube(Nombre, Paradero, estudiante, _),
%    costo_estudiante(Paradero, Monto).


% monto_pasajero(Nombre, Monto) :-
%    sube(Nombre, Paradero, externo, _),
%    costo_general(Paradero, Monto).


% Monto total recaudado de estudiantes en un paradero
monto_estudiantes_paradero(Paradero, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, estudiante, _),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).


% Monto total recaudado de externos en un paradero
monto_externos_paradero(Paradero, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, externo, _),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).


% Monto total recaudado en un paradero (estudiantes + externos)
monto_total_paradero(Paradero, MontoTotal) :-
    monto_estudiantes_paradero(Paradero, MontoEst),
    monto_externos_paradero(Paradero, MontoExt),
    MontoTotal is MontoEst + MontoExt.


% Monto recaudado en un tramo
monto_tramo_inclusivo(ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, _, _),
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).


% ===============================================
% REGLAS DE ANÁLISIS AVANZADO MEJORADAS
% ===============================================


% Paradero con mayor cantidad de mujeres estudiantes
paradero_mas_mujeres_estudiantes(Paradero, Cantidad) :-
    findall(Cant-Par,
           (paradero(Par, _),
            contar_pasajeros_tipo_genero(Par, estudiante, mujer, Cant)),
           Lista),
    max_pair_value(Lista, Cantidad-Paradero).


% Paradero con mayor pérdida por cobros escolares
paradero_mayor_perdida_escolar(Paradero, MaxPerdida) :-
    findall(Perdida-Par,
           (paradero(Par, _),
            perdida_cobros_escolares(Par, Perdida)),
           Lista),
    max_pair_value(Lista, MaxPerdida-Paradero).


% Calcular total hipotético si todos los estudiantes pagaran tarifa completa
total_hipotetico_estudiantes(Total) :-
    findall(Costo,
           (sube(_, Par, estudiante, _),
            costo_general(Par, Costo)),
           Costos),
    sum_list(Costos, Total).


% Pasajeros que suben en ventanilla pero no bajan en universitaria
pasajeros_ventanilla_no_universitaria(Lista) :-
    findall(Nombre,
           (sube(Nombre, ventanilla, _, _),
            \+ baja(Nombre, universitaria)),
           Lista).


% Paradero con mayor ganancia
paradero_mayor_ganancia(Paradero, MaxMonto) :-
    findall(Monto-Par,
           (paradero(Par, _),
            Par \= unmsm,
            Par \= universitaria,
            monto_total_paradero(Par, Monto)),
           Pares),
    max_pair_value(Pares, MaxMonto-Paradero).


% Pérdida por cobros escolares (diferencia entre tarifa completa y estudiantil)
perdida_cobros_escolares(Paradero, Perdida) :-
    findall(Diferencia,
           (sube(_, Paradero, estudiante, _),
            costo_general(Paradero, CostoCompleto),
            costo_estudiante(Paradero, CostoEstudiante),
            Diferencia is CostoCompleto - CostoEstudiante),
           Diferencias),
    sum_list(Diferencias, Perdida).


% Paradero con mejor ratio suben/bajan
paradero_mejor_ratio(Paradero, MaxRatio) :-
    findall(Ratio-Par,
           (paradero(Par, _),
            total_suben_paradero(Par, Suben),
            total_bajan_paradero(Par, Bajan),
            Bajan > 0,
            Ratio is Suben / Bajan),
           Lista),
    max_pair_value(Lista, MaxRatio-Paradero).


% Paradero con menor promedio de pago por pasajero
paradero_menor_promedio_pago(Paradero, MinProm) :-
    findall(Prom-Par,
           (paradero(Par, _),
            monto_total_paradero(Par, Monto),
            total_suben_paradero(Par, Suben),
            Suben > 0,
            Prom is Monto / Suben),
           Lista),
    min_pair_value(Lista, MinProm-Paradero).


% Paradero que más externos lleva a universitaria
paradero_mas_externos_universitaria(Paradero, Cantidad) :-
    findall(Cant-Par,
           (paradero(Par, _),
            findall(Nombre,
                   (sube(Nombre, Par, externo, _),
                    baja(Nombre, universitaria)),
                   L),
            length(L, Cant)),
           Lista),
    max_pair_value(Lista, Cantidad-Paradero).


% Porcentaje de mujeres en un tramo
porcentaje_mujeres_tramo(ParaderoInicio, ParaderoFin, Porcentaje) :-
    todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, TodosLista),
    include(es_mujer, TodosLista, MujeresList),
    length(MujeresList, CantMujeres),
    length(TodosLista, Total),
    Total > 0,
    Porcentaje is (CantMujeres * 100) / Total.


% Pasajeros con nombre que coincide parcialmente con su paradero
pasajeros_nombre_coincide_paradero(Lista) :-
    findall(Nombre-Par,
           (sube(Nombre, Par, _, _),
            atom_chars(Nombre, CharsNombre),
            atom_chars(Par, CharsPar),
            intersection(CharsNombre, CharsPar, Comunes),
            length(Comunes, LenComunes),
            LenComunes >= 3),
           Lista).


% Estudiante que no baja en UNMSM (caso especial)
estudiante_no_baja_unmsm(Nombre) :-
    sube(Nombre, _, estudiante, _),
    \+ baja(Nombre, unmsm).


% Historial completo de un pasajero (dónde sube y baja)
historial_pasajero(Nombre, sube_en(ParaderoSube), baja_en(ParaderoBaja)) :-
    sube(Nombre, ParaderoSube, _, _),
    baja(Nombre, ParaderoBaja).


% Predicados compuestos para consultas frecuentes
es_mujer_estudiante(Nombre) :-
    es_mujer(Nombre),
    sube(Nombre, _, estudiante, _).


es_varon_externo(Nombre) :-
    es_varon(Nombre),
    sube(Nombre, _, externo, _).


% Consulta genérica para cualquier tramo y condición
consulta_tramo(ParaderoInicio, ParaderoFin, Condicion, Porcentaje) :-
    todos_pasajeros_tramo_inclusivo(ParaderoInicio, ParaderoFin, L),
    porcentaje_en_lista(L, Condicion, Porcentaje).




% ===============================================
% IDIOMA NATAL Y IDIOMAS APRENDIDOS
% ===============================================


% País de nacimiento de cada persona
pais(ana, alemania).
pais(joel, francia).
pais(vania, peru).
pais(hugo, chile).
pais(renzo, chile).
pais(lia, japon).
pais(melany, chile).
pais(mateo, espana).
pais(samuel, espana).
pais(alonso, espana).
pais(aurora, peru).
pais(bianca, peru).
pais(isaac, peru).
pais(axel, chile).
pais(araceli, chile).
pais(indira, chile).
pais(noelia, chile).
pais(alex, francia).
pais(felix, francia).
pais(giselle, francia).
pais(evelyn, chile).
pais(dilan, peru).
pais(carmen, peru).
pais(karina, alemania).
pais(manuel, alemania).
pais(emir, peru).
pais(leandro, chile).
pais(dafne, chile).
pais(nayeli, peru).
pais(marilu, peru).
pais(luna, chile).
pais(alejandro, francia).
pais(lucio, alemania).
pais(jesus, japon).


% Idioma nativo por país
idioma_nativo(peru, espanol).
idioma_nativo(chile, espanol).
idioma_nativo(espana, espanol).
idioma_nativo(usa, ingles).
idioma_nativo(francia, frances).
idioma_nativo(alemania, aleman).
idioma_nativo(japon, japones).


% Idioma nativo de una persona
idioma_natal(Persona, Idioma) :-
    pais(Persona, Pais),
    idioma_nativo(Pais, Idioma).


% Idiomas aprendidos
habla(ana, quechua).
habla(joel, ingles).
habla(vania, ingles).
habla(vania, italiano).
habla(hugo, aleman).
habla(lia, frances).
habla(melany, ingles).
habla(mateo, portugues).
habla(samuel, ingles).
habla(alonso, italiano).
habla(araceli, ingles).
habla(axel, portugues).
habla(felix, frances).
habla(giselle, quechua).
habla(carmen, ingles).
habla(karina, quechua).
habla(noelia, portugues).
habla(evelyn, ingles).
habla(dilan, ingles).
habla(dafne, frances).
habla(indira, italiano).
habla(aurora, aleman).
habla(bianca, ingles).
habla(nayeli, frances).
habla(lucio, ingles).
habla(jesus, ingles).
habla(jesus, japones).


% Idiomas que domina (nativo + aprendidos)
idiomas_totales(Persona, [IdiomaNatal|OtrosIdiomas]) :-
    idioma_natal(Persona, IdiomaNatal),
    findall(Idioma, habla(Persona, Idioma), OtrosIdiomas).


% Persona bilingüe: habla exactamente 2 idiomas (nativo + 1 adicional)
es_bilingue(Persona) :-
    idiomas_totales(Persona, Idiomas),
    length(Idiomas, 2).


% Persona trilingüe: habla exactamente 3 idiomas (nativo + 2 adicionales)
es_trilingue(Persona) :-
    idiomas_totales(Persona, Idiomas),
    length(Idiomas, 3).
% ===============================================
% REGLA DE HERENCIA DE IDIOMA NATAL
% ===============================================

% Determina que un hijo sabe un idioma si ese idioma es el natal de su progenitor.
hereda_idioma_natal(Hijo, Idioma) :-
    progenitor(Progenitor, Hijo),
    idioma_natal(Progenitor, Idioma).
    
% ===============================================
% REGLA MEJORADA DE IDIOMAS TOTALES (INCLUYE HERENCIA)
% ===============================================

% Idiomas que domina una persona (nativo + aprendidos + heredados de padres)
idiomas_totales_mejorado(Persona, IdiomasFinales) :-
    % 1. Obtiene el idioma natal de la persona.
    idioma_natal(Persona, IdiomaNatal),

    % 2. Encuentra todos los idiomas que la persona ha aprendido.
    findall(IdiomaAprendido, habla(Persona, IdiomaAprendido), IdiomasAprendidos),

    % 3. Encuentra todos los idiomas natales heredados de sus progenitores.
    findall(IdiomaHeredado, hereda_idioma_natal(Persona, IdiomaHeredado), IdiomasHeredados),

    % 4. Une las listas de idiomas aprendidos y heredados.
    append(IdiomasAprendidos, IdiomasHeredados, OtrosIdiomas),

    % 5. Crea una lista completa (con posibles duplicados).
    ListaConDuplicados = [IdiomaNatal | OtrosIdiomas],

    % 6. Elimina los duplicados para obtener la lista final.
    list_to_set(ListaConDuplicados, IdiomasFinales).

% ===============================================
% REGLAS DE VIAJEROS POR IDIOMA Y TRAMO
% ===============================================

% sabe_idioma(Persona, Idioma)
% Es verdadero si el Idioma está en la lista de idiomas que domina la Persona.
% Utiliza la regla mejorada que incluye idiomas natales, aprendidos y heredados.
sabe_idioma(Persona, Idioma) :-
    idiomas_totales_mejorado(Persona, ListaDeIdiomas),
    member(Idioma, ListaDeIdiomas).
    
% sabe_algun_idioma(Persona, ListaIdiomas)
% Verdadero si una Persona sabe al menos uno de los idiomas en la lista.
sabe_algun_idioma(Persona, [Idioma|_]) :-
    sabe_idioma(Persona, Idioma), !.
sabe_algun_idioma(Persona, [_|Resto]) :-
    sabe_algun_idioma(Persona, Resto).

% sabe_todos_los_idiomas(Persona, ListaIdiomas)
% Verdadero si una Persona sabe TODOS los idiomas en la lista (conjunción, AND).
sabe_todos_los_idiomas(_, []).
sabe_todos_los_idiomas(Persona, [Idioma|Resto]) :-
    sabe_idioma(Persona, Idioma),
    sabe_todos_los_idiomas(Persona, Resto).


% hablantes_suben_entre_paraderos(Idioma, Inicio, Fin, Lista)
% Encuentra la lista de personas que saben un Idioma y suben al bus
% en un paradero que está entre Inicio y Fin (ambos inclusive).
hablantes_suben_entre_paraderos(Idioma, ParaderoInicio, ParaderoFin, ListaHablantes) :-
    findall(Persona,
            ( sube(Persona, ParaderoDeSubida, _, _),
              en_rango_inclusivo(ParaderoDeSubida, ParaderoInicio, ParaderoFin),
              sabe_idioma(Persona, Idioma)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaHablantes).

% hablantes_bajan_entre_paraderos(Idioma, Inicio, Fin, Lista)
% Encuentra la lista de personas que saben un Idioma y bajan del bus
% en un paradero que está entre Inicio y Fin (ambos inclusive).
hablantes_bajan_entre_paraderos(Idioma, ParaderoInicio, ParaderoFin, ListaHablantes) :-
    findall(Persona,
            ( baja(Persona, ParaderoDeBajada),
              en_rango_inclusivo(ParaderoDeBajada, ParaderoInicio, ParaderoFin),
              sabe_idioma(Persona, Idioma) % Verificamos si la persona sabe el idioma
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaHablantes).

% ===============================================
% REGLA DE DESCENDIENTES POR IDIOMA
% ===============================================

% descendientes_que_hablan_idioma(Ancestro, Idioma, Lista)
% Encuentra la lista de descendientes de un Ancestro que saben un Idioma específico.
descendientes_que_hablan_idioma(Ancestro, Idioma, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).
% descendientes_hablan_idioma_bajan_antes_de(Ancestro, Idioma, ParaderoFin, ListaDescendientes)
% Encuentra la lista de descendientes de un Ancestro que saben un Idioma específico
% y bajan del bus en un paradero ANTES de ParaderoFin (exclusivo).

% =======================================================================
% REGLA DE DESCENDIENTES POR LISTA DE IDIOMAS (CONJUNCIÓN) (NUEVO)
% =======================================================================

% descendientes_que_hablan_todos_los_idiomas(Ancestro, ListaIdiomas, ListaDescendientes)
% Encuentra la lista de descendientes de un Ancestro que saben TODOS los idiomas de una lista.
descendientes_que_hablan_todos_los_idiomas(Ancestro, ListaIdiomas, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

descendientes_hablan_idioma_bajan_antes_de(Ancestro, Idioma, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),     % Es un descendiente del Ancestro
              sabe_idioma(Descendiente, Idioma),            % Sabe el idioma especificado
              baja_antes_de(Descendiente, ParaderoFin)      % Baja antes del ParaderoFin
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes). % Elimina duplicados

% ===============================================
% REGLAS DE CÁLCULOS MONETARIOS
% ===============================================

% --- REGLAS DE MONTO ORIGINALES (COMENTADAS) ---
% monto_pasajero(Nombre, Monto) :-
%     sube(Nombre, Paradero, estudiante, _),
%     costo_estudiante(Paradero, Monto).
%
% monto_pasajero(Nombre, Monto) :-
%     sube(Nombre, Paradero, externo, _),
%     costo_general(Paradero, Monto).

% --- NUEVAS REGLAS DE MONTO POR GÉNERO ---
% Calcula el monto a pagar por un pasajero basado en su género.
% Varones pagan 2.0 y mujeres pagan 3.0.
monto_pasajero(Nombre, 2.0) :-
    sube(Nombre, _, _, varon).

monto_pasajero(Nombre, 3.0) :-
    sube(Nombre, _, _, mujer).


% Monto total recaudado de estudiantes en un paradero
monto_estudiantes_paradero(Paradero, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, estudiante, _),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).


% Monto total recaudado de externos en un paradero
monto_externos_paradero(Paradero, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, externo, _),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).


% Monto total recaudado en un paradero (estudiantes + externos)
monto_total_paradero(Paradero, MontoTotal) :-
    monto_estudiantes_paradero(Paradero, MontoEst),
    monto_externos_paradero(Paradero, MontoExt),
    MontoTotal is MontoEst + MontoExt.


% Monto recaudado en un tramo
monto_tramo_inclusivo(ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
           (sube(Nombre, Paradero, _, _),
            en_rango_inclusivo(Paradero, ParaderoInicio, ParaderoFin),
            monto_pasajero(Nombre, Monto)),
           Montos),
    sum_list(Montos, MontoTotal).

% Caso base: si la lista está vacía, el monto total es 0.
sumar_montos_pasajeros([], 0).

% Caso recursivo:
sumar_montos_pasajeros([Pasajero|Resto], MontoTotal) :-
    monto_pasajero(Pasajero, MontoPasajero),      % Obtiene el monto del pasajero actual.
    sumar_montos_pasajeros(Resto, MontoResto),    % Llama recursivamente para el resto de la lista.
    MontoTotal is MontoPasajero + MontoResto.     % Suma el monto actual con el del resto.

% ===============================================
% REGLAS DE PAGO POR DESCENDIENTES, IDIOMA Y PARADERO (NUEVO)
% ===============================================

% --- REGLAS DE BAJADA ---

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y BAJARON EN un Paradero específico.
pago_descendientes_idioma_bajan_en(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              baja(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y BAJARON ENTRE dos Paraderos (inclusivo).
pago_descendientes_idioma_bajan_entre(Ancestro, Idioma, ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              baja(Descendiente, ParaderoBaja),
              en_rango_inclusivo(ParaderoBaja, ParaderoInicio, ParaderoFin),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y BAJARON ANTES de un Paradero específico.
pago_descendientes_idioma_bajan_antes(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              baja_antes_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y BAJARON DESPUÉS de un Paradero específico.
pago_descendientes_idioma_bajan_despues(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              baja_despues_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).


% --- REGLAS DE SUBIDA ---

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y SUBIERON EN un Paradero específico.
pago_descendientes_idioma_suben_en(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              sube(Descendiente, Paradero, _, _),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y SUBIERON ENTRE dos Paraderos (inclusivo).
pago_descendientes_idioma_suben_entre(Ancestro, Idioma, ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              sube(Descendiente, ParaderoSube, _, _),
              en_rango_inclusivo(ParaderoSube, ParaderoInicio, ParaderoFin),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y SUBIERON ANTES de un Paradero específico.
pago_descendientes_idioma_suben_antes(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              sube_antes_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% Calcula el monto total pagado por los descendientes de un Ancestro que hablan un Idioma
% y SUBIERON DESPUÉS de un Paradero específico.
pago_descendientes_idioma_suben_despues(Ancestro, Idioma, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_idioma(Descendiente, Idioma),
              sube_despues_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% =======================================================================
% REGLAS DE PAGO POR DESCENDIENTES, LISTA DE IDIOMAS (DISYUNCIÓN) Y PARADERO
% =======================================================================

% --- REGLAS DE BAJADA CON LISTA DE IDIOMAS (OR) ---

pago_descendientes_idiomas_bajan_en(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              baja(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_bajan_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              baja(Descendiente, ParaderoBaja),
              en_rango_inclusivo(ParaderoBaja, ParaderoInicio, ParaderoFin),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_bajan_antes(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              baja_antes_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_bajan_despues(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              baja_despues_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).


% --- REGLAS DE SUBIDA CON LISTA DE IDIOMAS (OR) ---

pago_descendientes_idiomas_suben_en(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              sube(Descendiente, Paradero, _, _),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_suben_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              sube(Descendiente, ParaderoSube, _, _),
              en_rango_inclusivo(ParaderoSube, ParaderoInicio, ParaderoFin),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_suben_antes(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              sube_antes_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_idiomas_suben_despues(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_algun_idioma(Descendiente, ListaIdiomas),
              sube_despues_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

% =======================================================================
% REGLAS DE PAGO POR DESCENDIENTES, LISTA DE IDIOMAS (CONJUNCIÓN) Y PARADERO
% =======================================================================

% --- REGLAS DE BAJADA CON LISTA DE IDIOMAS (AND) ---

pago_descendientes_todos_idiomas_bajan_en(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    descendientes_idiomas_bajan_en(Ancestro, ListaIdiomas, Paradero, ListaDescendientesUnicos),
    sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).

pago_descendientes_todos_idiomas_bajan_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, MontoTotal) :-
    descendientes_idiomas_bajan_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, ListaDescendientesUnicos),
    sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).

pago_descendientes_todos_idiomas_bajan_antes(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    descendientes_idiomas_bajan_antes(Ancestro, ListaIdiomas, Paradero, ListaDescendientesUnicos),
    sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).

pago_descendientes_todos_idiomas_bajan_despues(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    % 1. Obtenemos la lista de descendientes SIN duplicados.
    %    Reutilizamos la regla que ya habías creado para esto.
    descendientes_idiomas_bajan_despues(Ancestro, ListaIdiomas, Paradero, ListaDescendientesUnicos),

    % 2. Usamos el predicado auxiliar para sumar los montos de la lista única.
    sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).

% REGLA CORREGIDA
% Esta versión primero obtiene una lista ÚNICA de descendientes y luego
% suma sus montos, evitando el conteo doble.
% pago_descendientes_corregido(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    % 1. Obtenemos la lista de descendientes SIN duplicados.
    %    Reutilizamos la regla que ya habías creado para esto.
    % descendientes_idiomas_bajan_despues(Ancestro, ListaIdiomas, Paradero, ListaDescendientesUnicos),

    % 2. Usamos el predicado auxiliar para sumar los montos de la lista única.
    % sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).



% --- REGLAS DE SUBIDA CON LISTA DE IDIOMAS (AND) ---

pago_descendientes_todos_idiomas_suben_en(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube(Descendiente, Paradero, _, _),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_todos_idiomas_suben_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube(Descendiente, ParaderoSube, _, _),
              en_rango_inclusivo(ParaderoSube, ParaderoInicio, ParaderoFin),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_todos_idiomas_suben_antes(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    findall(Monto,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube_antes_de(Descendiente, Paradero),
              monto_pasajero(Descendiente, Monto)
            ),
            ListaMontos),
    sum_list(ListaMontos, MontoTotal).

pago_descendientes_todos_idiomas_suben_despues(Ancestro, ListaIdiomas, Paradero, MontoTotal) :-
    descendientes_idiomas_suben_despues(Ancestro, ListaIdiomas, Paradero, ListaDescendientesUnicos),
    sumar_montos_pasajeros(ListaDescendientesUnicos, MontoTotal).
    
% =======================================================================
% REGLAS DE BÚSQUEDA DE DESCENDIENTES POR IDIOMAS Y VIAJE (NUEVO)
% =======================================================================

% --- BÚSQUEDA POR BAJADA ---
% Lista de descendientes que hablan ciertos idiomas y BAJARON EN un paradero.
descendientes_idiomas_bajan_en(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              baja(Descendiente, Paradero)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y BAJARON ENTRE paraderos.
descendientes_idiomas_bajan_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              baja(Descendiente, ParaderoBaja),
              en_rango_inclusivo(ParaderoBaja, ParaderoInicio, ParaderoFin)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y BAJARON ANTES de un paradero.
descendientes_idiomas_bajan_antes(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              baja_antes_de(Descendiente, Paradero)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y BAJARON DESPUÉS de un paradero.
descendientes_idiomas_bajan_despues(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              baja_despues_de(Descendiente, Paradero)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% --- BÚSQUEDA POR SUBIDA ---
% Lista de descendientes que hablan ciertos idiomas y SUBIERON EN un paradero.
descendientes_idiomas_suben_en(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube(Descendiente, Paradero, _, _)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y SUBIERON ENTRE paraderos.
descendientes_idiomas_suben_entre(Ancestro, ListaIdiomas, ParaderoInicio, ParaderoFin, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube(Descendiente, ParaderoSube, _, _),
              en_rango_inclusivo(ParaderoSube, ParaderoInicio, ParaderoFin)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y SUBIERON ANTES de un paradero.
descendientes_idiomas_suben_antes(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube_antes_de(Descendiente, Paradero)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% Lista de descendientes que hablan ciertos idiomas y SUBIERON DESPUÉS de un paradero.
descendientes_idiomas_suben_despues(Ancestro, ListaIdiomas, Paradero, ListaDescendientes) :-
    findall(Descendiente,
            ( es_descendiente(Ancestro, Descendiente),
              sabe_todos_los_idiomas(Descendiente, ListaIdiomas),
              sube_despues_de(Descendiente, Paradero)
            ),
            ListaConDuplicados),
    list_to_set(ListaConDuplicados, ListaDescendientes).

% --- FIN DEL ARCHIVO ---

      
      `,
      sampleQueries: [
        "descendientes_que_hablan_todos_los_idiomas(felix, [espanol, frances], Descendientes).",
        "pago_descendientes_idiomas_bajan_despues(dafne, [ingles, quechua], puente_colonial, MontoTotal).",
        "paradero_mejor_ratio(Paradero, MaxRatio).",
      ],
    },
  },
  "15": {
    "sistema-legal": {
      title: "Sistema Experto Legal",
      description: "",
      imageUrl:
        "https://www.canva.com/design/DAGtNJJcCh4/euqDKpy_08GvLZmpFVpxOg/edit",
      initialProgram: `
        
% ================================================================
% SISTEMA EXPERTO LEGAL AVANZADO
% ================================================================
:- use_module(library(date)).
:- use_module(library(aggregate)).
:- use_module(library(lists)).
:- dynamic(persona/4).
:- dynamic(caso/6).
:- dynamic(estadistica_cache/3).
:- dynamic(log_evento/3).
:- dynamic(alerta/3).


% ================================================================
% BASE DE DATOS INICIAL
% ================================================================


% Base de datos inicial de personas
persona(john, 34, hombre, eeuu).
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
caso(john, violencia_familiar, 'Violencia domestica reportada', alta, activo, fecha(2025,6,1)).
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
caso(fatima, violencia_familiar, 'Agresi n fisica a hijos', media, activo, fecha(2025,6,14)).
caso(zara, violencia_familiar, 'Pelea por herencia', alta, pendiente, fecha(2025,7,15)).
caso(zara, herencia, 'Hogar en litigio', media, activo, fecha(2025,6,19)).
caso(akira, herencia, 'Disputa entre hermanos', alta, activo, fecha(2025,7,20)).
caso(akira, pension_alimentos,'Reincidente hace 4 meses', media, pendiente, fecha(2024,2,18)).
caso(akira, estafa, 'Multiples cr ditos hipotecados', media, baja, fecha(2025,4,20)).


% Regiones geogr ficas
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


% Consulta 1: Porcentaje de g nero con casos
porcentaje_genero_con_caso(Genero, Porcentaje) :-
    findall(P, persona(P, _, Genero, _), TotalPersonas),
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, _, _, _)), PersonasConCaso),
    length(TotalPersonas, Total),
    length(PersonasConCaso, ConCaso),
    Total > 0,
    Porcentaje is (ConCaso * 100) / Total.
% Consulta 2: Distribuci n de tipos de caso por g nero
distribucion_tipos_por_genero(Genero, Distribucion) :-
    findall(Tipo, (persona(P, _, Genero, _), caso(P, Tipo, _, _, _, _)), Tipos),
    contar_ocurrencias(Tipos, Distribucion).
% Consulta 3: Casos por pa s
casos_por_pais(Pais, Cantidad) :-
    findall(P, (persona(P, _, _, Pais), caso(P, _, _, _, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).
% Consulta 4: Personas con m ltiples casos
personas_con_multiples_casos(Personas) :-
    findall(P, (persona(P, _, _, _), findall(_, caso(P, _, _, _, _, _), Casos), length(Casos, N), N > 1), Personas),
    list_to_set(Personas, PersonasUnicas),
    Personas = PersonasUnicas.
% Consulta 5: Casos urgentes por regi n
casos_urgentes_por_region(Region, Cantidad) :-
    findall(P, (persona(P, _, _, Pais), region(Pais, Region), caso(P, _, _, alta, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).
% Consulta 6: Tiempo promedio de resoluci n
tiempo_promedio_resolucion(Tipo, DiasPromedio) :-
    findall(D, caso_resuelto(_, Tipo, _, D), Duraciones),
    length(Duraciones, N), N > 0,
    sum_list(Duraciones, Suma),
    DiasPromedio is Suma / N.


% Consulta 7: Estad sticas de edad por tipo de caso
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
% Consulta 9: Casos por prioridad y g nero
casos_por_prioridad_genero(Prioridad, Genero, Cantidad) :-
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, Prioridad, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).
% Consulta 10: Top pa ses con m s casos
top_paises_con_casos(N, Top) :-
    findall(Pais-Cant, (region(Pais, _), casos_por_pais(Pais, Cant)), PaisesCant),
    sort(2, @>=, PaisesCant, Ordenados),
    length(Ordenados, L),
    (N > L -> N1 = L ; N1 = N),
    primeros_n(N1, Ordenados, Top).
% ================================================================
% NUEVAS CONSULTAS INTUITIVAS (AGREGADAS)
% ================================================================


% 1. Consulta b sica de personas con filtros
consultar_personas(Genero, RangoEdad, Pais, Personas) :-
    (Genero == todos -> true ; persona(_, _, Genero, _)),
    (Pais == todos -> true ; persona(_, _, _, Pais)),
    rango_edad(RangoEdad, MinEdad, MaxEdad),
    findall(P, (persona(P, Edad, Genero, Pais),
                  Edad >= MinEdad, Edad =< MaxEdad), Personas).
% Rangos de edad predefinidos
rango_edad(menores, 0, 17).
rango_edad(adultos_jovenes, 18, 35).
rango_edad(adultos, 36, 65).
rango_edad(mayores, 66, 120).
rango_edad(todos, 0, 120).
% 2. Consulta de casos con m ltiples filtros
consultar_casos(Tipo, Prioridad, Estado, FechaInicio, FechaFin, Casos) :-
    (Tipo == todos -> true ; caso(_, Tipo, _, _, _, _)),
    (Prioridad == todas -> true ; caso(_, _, _, Prioridad, _, _)),
    (Estado == todos -> true ; caso(_, _, _, _, Estado, _)),
    findall([P, Tipo, Desc],
            (caso(P, Tipo, Desc, Prioridad, Estado, Fecha),
             entre_fechas(Fecha, FechaInicio, FechaFin)), Casos).
% 3. Estad sticas demogr ficas b sicas
estadisticas_demograficas(Genero, Pais, Estadisticas) :-
    findall(Edad, persona(_, Edad, Genero, Pais), Edades),
    Edades \= [],
    length(Edades, Cantidad),
    min_list(Edades, Min),
    max_list(Edades, Max),
    sum_list(Edades, Suma),
    Promedio is Suma / Cantidad,
    Estadisticas = [cantidad-Cantidad, min-Min, max-Max, promedio-Promedio].
% 4. B squeda de patrones predefinidos
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
% 5. Distribuci n geogr fica de casos
distribucion_geografica(TipoCaso, Distribucion) :-
    findall(Region-Cantidad,
            (region(Pais, Region),
             findall(P, (persona(P, _, _, Pais),
                               caso(P, TipoCaso, _, _, _, _)), Casos),
             length(Casos, Cantidad)),
            Distribucion).


% 6. Evoluci n temporal de casos
evolucion_temporal(TipoCaso, Meses, Datos) :-
    findall([Mes-Cantidad],
            (between(1, Meses, Mes),
             findall(P, caso(P, TipoCaso, _, _, _, fecha(_, Mes, _)), Casos),
             length(Casos, Cantidad)),
            Datos).
% ================================================================
% CONSULTAS SIMPLIFICADAS PARA USUARIOS NO T CNICOS
% ================================================================


% Versi n FINAL - Calcula el porcentaje de g nero DENTRO de un tipo de caso espec fico
porcentaje_genero_en_caso(TipoCaso, Genero, Porcentaje) :-
    % Total de personas con este tipo de caso
    findall(P, caso(P, TipoCaso, _, _, _, _), TotalCasosRaw),
    % Asegurarse de contar solo personas  nicas en el caso, no duplicados si una persona tiene m ltiples casos del mismo tipo
    list_to_set(TotalCasosRaw, TotalCasosUnicos),
    length(TotalCasosUnicos, Total),

    % Personas del g nero espec fico con este tipo de caso
    findall(P, (persona(P, _, Genero, _), caso(P, TipoCaso, _, _, _, _)), CasosGeneroRaw),
    list_to_set(CasosGeneroRaw, CasosGeneroUnicos),
    length(CasosGeneroUnicos, Cantidad),

    Total > 0, % Evitar divisi n por cero
    Porcentaje is (Cantidad * 100) / Total.



% 2. Distribuci n de casos por g nero (todos los casos)
distribucion_casos_por_genero(Genero, Distribucion) :-
    findall(Tipo, (persona(P, _, Genero, _), caso(P, Tipo, _, _, _, _)), Tipos),
    contar_ocurrencias(Tipos, Distribucion).
% 3. Cantidad de personas de un g nero en casos de alta prioridad
casos_urgentes_por_genero(Genero, Cantidad) :-
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, alta, _, _)), Casos),
    sort(Casos, CasosUnicos),
    length(CasosUnicos, Cantidad).
% 4. Personas menores de edad en un tipo de caso espec fico
menores_en_caso(TipoCaso, Personas) :-
    findall([P, Edad], (persona(P, Edad, _, _), Edad < 18, caso(P, TipoCaso, _, _, _, _)), Personas).
% 5. Porcentaje de casos de un tipo por pa s
porcentaje_caso_por_pais(TipoCaso, Pais, Porcentaje) :-
    findall(_, persona(_, _, _, Pais), TotalPais),
    findall(_, (persona(P, _, _, Pais), caso(P, TipoCaso, _, _, _, _)), CasosPais),
    length(TotalPais, Total),
    length(CasosPais, Casos),
    Total > 0,
    Porcentaje is (Casos * 100) / Total.
% 6. Consulta simple por tipo de caso y g nero
consultar_caso_genero(TipoCaso, Genero, Resultados) :-
    findall([P, Edad, Pais],
            (persona(P, Edad, Genero, Pais), caso(P, TipoCaso, _, _, _, _)),
            Resultados).
% 7. Resumen estadistico por g nero (con la modificaci n del "tipo_mas_comun")
% Versi n corregida del predicado resumen_estadistico_genero/2
resumen_estadistico_genero(Genero, Resumen) :-
    % Total personas de ese g nero
    findall(P, persona(P, _, Genero, _), TotalPersonas),
    length(TotalPersonas, TotalP),

    % Personas con casos ( nicas)
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, _, _, _)), ConCasosRaw),
    list_to_set(ConCasosRaw, ConCasosUnicos),
    length(ConCasosUnicos, TotalConCasos),

    % Casos urgentes ( nicos)
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, alta, _, _)), UrgentesRaw),
    list_to_set(UrgentesRaw, UrgentesUnicos),
    length(UrgentesUnicos, TotalUrgentes),

    % Tipo de caso m s com n
    findall(Tipo, (persona(P, _, Genero, _), caso(P, Tipo, _, _, _, _)), Tipos),
    (Tipos \= [] ->
        contar_ocurrencias(Tipos, DistribucionTipos),
        sort(2, @>=, DistribucionTipos, TiposOrdenados),
        TiposOrdenados = [[TipoMasComun, _]|_]
    ;
        TipoMasComun = 'Ninguno'
    ),

    % C lculo seguro del porcentaje
    Porcentaje is (TotalConCasos*100.0)/max(TotalP, 1), % Evita divisi n por cero

    % Construcci n del resumen
    Resumen = [
        total_personas-TotalP,
        personas_con_casos-TotalConCasos,
        porcentaje_con_casos-Porcentaje,
        casos_urgentes-TotalUrgentes,
        tipo_mas_comun-TipoMasComun
    ].

% Predicado auxiliar para evitar divisi n por cero
max(X, Y, Max) :- X >= Y -> Max = X ; Max = Y.
max(X, Y) :- max(X, Y, _).


% Consulta f cil para estad sticas de g nero
estadisticas_genero(Genero) :-
    % 1. Obtener datos b sicos
    findall(P, persona(P, _, Genero, _), Personas),
    length(Personas, TotalPersonas),

    % 2. Personas con casos ( nicas)
    findall(P, (persona(P, _, Genero, _), caso(P, _, _, _, _, _)), ConCasos),
    sort(ConCasos, ConCasosUnicos),
    length(ConCasosUnicos, TotalConCasos),

    % 3. C lculo de porcentaje seguro
    Porcentaje is (TotalConCasos*100)/max(TotalPersonas,1),

    % 4. Mostrar resultados en formato simple
    format('~n=== ESTADISTICAS PARA ~w ===~n', [Genero]),
    format('Total de personas: ~w~n', [TotalPersonas]),
    format('Personas con casos: ~w (~1f%)~n', [TotalConCasos, Porcentaje]),

    % 5. Mostrar tipos de casos m s comunes
    findall(Tipo, (persona(P, _, Genero, _), caso(P, Tipo, _, _, _, _)), Tipos),
    (Tipos \= [] ->
        contar_ocurrencias(Tipos, Distribucion),
        sort(2, @>=, Distribucion, Ordenados),
        write('Tipos de casos mas frecuentes:~n'),
        forall(member([Tipo,Cant], Ordenados),
               format('- ~w: ~w casos~n', [Tipo, Cant]))
    ;
        write('No hay casos registrados~n')
    ),
    write('============================~n~n').

% Predicado auxiliar para evitar divisi n por cero
max(A, B, Mayor) :- (A >= B -> Mayor = A ; Mayor = B).
max(A, B) :- max(A, B, _).



% ================================================================
% NUEVA CONSULTA: PERSONAS POR TIPO DE CASO Y RANGO DE EDAD
% ================================================================

% Predicado principal para listar personas en un tipo de caso y rango de edad.
% Uso: consultar_personas_en_caso_y_rango(TipoCaso, EdadMinima, EdadMaxima).
consultar_personas_en_caso_y_rango(TipoCaso, EdadMinima, EdadMaxima) :-
    % 1. Encontrar personas que cumplan las condiciones
    findall(P, (
        persona(P, Edad, _, _), % La persona y su edad
        Edad >= EdadMinima,     % La edad es mayor o igual a la m nima
        Edad =< EdadMaxima,     % La edad es menor o igual a la m xima
        caso(P, TipoCaso, _, _, _, _) % La persona tiene un caso del TipoCaso especificado
    ), PersonasUnicasRaw),
    % 2. Asegurarse de que la lista de personas sea  nica (sin duplicados)
    list_to_set(PersonasUnicasRaw, PersonasEncontradas),
    % 3. Mostrar los resultados de forma clara
    escribir_resultado_personas_en_caso_y_rango(TipoCaso, EdadMinima, EdadMaxima, PersonasEncontradas).

% Predicado auxiliar para formatear y mostrar los resultados de la consulta anterior.
escribir_resultado_personas_en_caso_y_rango(TipoCaso, EdadMinima, EdadMaxima, Personas) :-
    format('~n=== PERSONAS EN CASOS DE "~w" ENTRE ~w Y ~w A OS ===~n', [TipoCaso, EdadMinima, EdadMaxima]),
    (   Personas = [] ->
        write('No se encontraron personas que cumplan el criterio en la base de datos.~n')
    ;   length(Personas, Total),
        format('Total de personas encontradas: ~w~n', [Total]),
        write('----------------------------------------------------~n'),
        forall(member(P, Personas), (
            persona(P, Edad, Genero, Pais), % Obtener detalles de la persona
            % Si el caso existe (ya sabemos que existe por el findall), obtener su descripci n y prioridad
            caso(P, TipoCaso, Descripcion, Prioridad, Estado, Fecha), % Obtener detalles espec ficos del caso
            format('- ~w (Edad: ~w, G nero: ~w, Pa s: ~w)~n', [P, Edad, Genero, Pais]),
            format('  Detalles del caso: "~w" (Prioridad: ~w, Estado: ~w, Fecha: ~w)~n', [Descripcion, Prioridad, Estado, Fecha])
        ))
    ),
    write('====================================================~n~n').


consultar_personas_en_caso_y_rango(violencia_familiar, 25, 40).

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
% Predicado temporal para casos resueltos (deber as implementar tu l gica real)
caso_resuelto(Persona, Tipo, Prioridad, Dias) :-
    caso(Persona, Tipo, _, Prioridad, resuelto, fecha(A1,M1,D1)),
    fecha_resolucion(fecha(A2,M2,D2)), % Sin variables no usadas
    dias_transcurridos(fecha(A1,M1,D1), fecha(A2,M2,D2), Dias).
fecha_resolucion(fecha(2025, 12, 31)). % Fecha de resoluci n ficticia


% Calcular d as entre fechas
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
% MOSTRAR RESULTADOS (VERSI N OPTIMIZADA)
% ================================================================


% Consultas originales
mostrar_resultado(porcentaje_genero_con_caso(Genero, P)) :-
    format('Porcentaje de ~w con casos: ~2f%~n', [Genero, P]).
mostrar_resultado(distribucion_tipos_por_genero(Genero, D)) :-
    format('Distribuci n para ~w:~n', [Genero]),
    forall(member([Tipo, N], D), format('- ~w: ~w casos~n', [Tipo, N])).
mostrar_resultado(casos_por_pais(Pais, C)) :-
    format('Casos en ~w: ~w~n', [Pais, C]).
mostrar_resultado(personas_con_multiples_casos(P)) :-
    format('Personas con m ltiples casos (~w):~n', [length(P)]),
    forall(member(Persona, P), (
        persona(Persona, Edad, Genero, _),
        format('- ~w (~w a os, ~w)~n', [Persona, Edad, Genero])
    )).
mostrar_resultado(casos_urgentes_por_region(Region, C)) :-
    format('Casos urgentes en ~w: ~w~n', [Region, C]).
mostrar_resultado(tiempo_promedio_resolucion(Tipo, D)) :-
    format('Tiempo promedio para resolver ~w: ~1f d as~n', [Tipo, D]).
mostrar_resultado(estadisticas_edad_por_tipo(Tipo, Min, Max, Prom)) :-
    format('Estad sticas de edad para ~w:~n', [Tipo]),
    format('- M nima: ~w a os~n', [Min]),
    format('- M xima: ~w a os~n', [Max]),
    format('- Promedio: ~1f a os~n', [Prom]).
mostrar_resultado(personas_en_riesgo(P)) :-
    format('Personas en riesgo (~w):~n', [length(P)]),
    forall(member(Persona, P), (
        persona(Persona, Edad, _, Pais),
        format('- ~w (~w a os, ~w)~n', [Persona, Edad, Pais])
    )).
mostrar_resultado(casos_por_prioridad_genero(Prioridad, Genero, C)) :-
    format('Casos ~w para ~w: ~w~n', [Prioridad, Genero, C]).
mostrar_resultado(top_paises_con_casos(N, Top)) :-
    format('Top ~w pa ses con m s casos:~n', [N]),
    forall(member(Pais-Cant, Top), format('- ~w: ~w casos~n', [Pais, Cant])).
% Consultas intuitivas
mostrar_resultado(consultar_personas(Genero, Rango, Pais, Personas)) :-
    format('Personas filtradas [G nero: ~w, Edad: ~w, Pa s: ~w]:~n', [Genero, Rango, Pais]),
    (   Personas = [] ->
        write('  No se encontraron resultados.\n')
    ;   length(Personas, Total),
        format('  Total: ~w personas~n', [Total]),
        forall(member(P, Personas), (
            persona(P, Edad, Genero, PaisActual), % Renombrar Pais para evitar conflicto
            findall(T, caso(P, T, _, _, _, _), Casos),
            length(Casos, NCasos),
            format('  - ~w (~w a os, ~w, ~w casos)~n', [P, Edad, Genero, NCasos])
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
            format('  - ~w (~w, ~w a os): ~w~n', [P, Genero, Edad, D])
        ))
    ).
mostrar_resultado(estadisticas_demograficas(Genero, Pais, Stats)) :-
    format('Estad sticas demogr ficas [G nero: ~w, Pa s: ~w]:~n', [Genero, Pais]),
    forall(member(Key-Value, Stats), (
        format('  - ~|~w~t~20+: ~w~n', [Key, Value])
    )).
mostrar_resultado(buscar_patrones(Tipo, Resultados)) :-
    format('Resultados del patr n "~w":~n', [Tipo]),
    (   Resultados = [] ->
        write('  No se encontraron coincidencias.\n')
    ;   length(Resultados, Total),
        format('  Total: ~w casos~n', [Total]),
        forall(member(P, Resultados), (
            persona(P, Edad, Genero, Pais),
            findall(T, caso(P, T, _, _, _, _), Tipos),
            atomic_list_concat(Tipos, ', ', TiposStr),
            format('  - ~w (~w, ~w a os, ~w): ~w~n', [P, Genero, Edad, Pais, TiposStr])
        ))
    ).
mostrar_resultado(distribucion_geografica(Tipo, Distribucion)) :-
    format('Distribuci n geogr fica de casos de ~w:~n', [Tipo]),
    (   Distribucion = [] ->
        write('  No hay datos disponibles.\n')
    ;   forall(member(Region-Cant, Distribucion), (
            Cant > 0 ->
                format('  - ~w: ~w casos~n', [Region, Cant])
            ; true
        ))
    ).


mostrar_resultado(evolucion_temporal(Tipo, Meses, Datos)) :-
    format('Evoluci n de casos de ~w ( ltimos ~w meses):~n', [Tipo, Meses]),
    (   Datos = [] ->
        write('  No hay datos disponibles.\n')
    ;   forall(member([Mes-Cant], Datos), (
            format('  - Mes ~|~\`0t~2+~w: ~t~w~5+ casos~n', [Mes, Cant])
        ))
    ).
mostrar_resultado(porcentaje_genero_en_caso(Tipo, Genero, P)) :-
    format('Porcentaje de ~w en casos de ~w: ~1f%~n', [Genero, Tipo, P]).
mostrar_resultado(distribucion_casos_por_genero(Genero, D)) :-
    format('Distribuci n de casos para ~w:~n', [Genero]),
    forall(member([Tipo, N], D), format('- ~w: ~w casos~n', [Tipo, N])).
mostrar_resultado(casos_urgentes_por_genero(Genero, C)) :-
    format('Casos urgentes para ~w: ~w~n', [Genero, C]).
mostrar_resultado(menores_en_caso(Tipo, Personas)) :-
    format('Menores de edad en casos de ~w (~w):~n', [Tipo, length(Personas)]),
    forall(member([P, Edad], Personas), (
        persona(P, _, Genero, Pais),
        format('- ~w (~w a os, ~w, ~w)~n', [P, Edad, Genero, Pais])
    )).
mostrar_resultado(porcentaje_caso_por_pais(Tipo, Pais, P)) :-
    format('Porcentaje de casos de ~w en ~w: ~1f%~n', [Tipo, Pais, P]).
mostrar_resultado(consultar_caso_genero(Tipo, Genero, Resultados)) :-
    format('Personas ~w en casos de ~w (~w):~n', [Genero, Tipo, length(Resultados)]),
    forall(member([P, Edad, Pais], Resultados), (
        format('- ~w (~w a os, ~w)~n', [P, Edad, Pais])
    )).

% ESTA REGLA ESPEC FICA DEBE IR ANTES DE LA GEN RICA
mostrar_resultado(resumen_estadistico_genero(Genero, Resumen)) :-
    % Verificaci n de seguridad
    (is_list(Resumen) ->
        format('=== RESUMEN ESTAD STICO PARA ~w ===~n', [Genero]),
        (member(total_personas-Total, Resumen) ->
            format('Total personas: ~w~n', [Total]) ; true),
        (member(personas_con_casos-ConCasos, Resumen) ->
            format('Personas con casos: ~w~n', [ConCasos]) ; true),
        (member(porcentaje_con_casos-Porcentaje, Resumen) ->
            format('Porcentaje con casos: ~1f%~n', [Porcentaje]) ; true),
        (member(casos_urgentes-Urgentes, Resumen) ->
            format('Casos urgentes: ~w~n', [Urgentes]) ; true),
        (member(tipo_mas_comun-TipoComun, Resumen) ->
            format('Tipo de caso m s com n: ~w~n', [TipoComun]) ; true),
        write('=====================================~n')
    ;
        write('Error: El resumen no tiene formato v lido~n')
    ),
    !.
    
% :- use_module(library(lists)). % Necesario para member/2 y otros helpers de listas.

% ================================================================
% CONSULTA PARA RANKING DE PERSONAS CON M S CASOS
% ================================================================

% Predicado para generar el ranking de personas con m s casos.
% Ranking: Unificar  con la lista de pares Conteo-Nombre, ordenada de mayor a menor.
ranking_personas_por_casos(Ranking) :-
    % 1. Recoleta todos los nombres de las personas que tienen un caso.
    %    findall/3 busca en todos los hechos \`caso(Nombre, ...)\` y crea la lista 'Nombres'.
    findall(Nombre, caso(Nombre, _, _, _, _, _), Nombres),

    % 2. Crea una lista con los nombres  nicos para no contar dos veces a la misma persona.
    sort(Nombres, NombresUnicos),

    % 3. Para cada nombre  nico, cuenta cu ntas veces aparece en la lista original.
    %    Esto nos da el n mero de casos por persona.
    findall(Conteo-NombreUnico,
            (member(NombreUnico, NombresUnicos),
             % Contamos las ocurrencias de cada NombreUnico en la lista completa de Nombres
             aggregate_all(count, member(NombreUnico, Nombres), Conteo)),
            Pares),

    % 4. Ordena la lista de pares en orden descendente basado en el conteo.
    %    - '1' indica que se ordena por el primer elemento del par (el Conteo).
    %    - '@>=' especifica el orden descendente.
    sort(1, @>=, Pares, Ranking).

% Predicado adicional para mostrar el resultado de forma clara.
mostrar_ranking :-
    ranking_personas_por_casos(Ranking),
    write('=== TOP DE PERSONAS CON M S CASOS ==='), nl,
    write('-------------------------------------'), nl,
    forall(member(Conteo-Nombre, Ranking),
           format('~w casos - ~w~n', [Conteo, Nombre])),
    write('-------------------------------------'), nl.

% ================================================================
% INICIO DEL SISTEMA
% ================================================================
:- write('Sistema Experto Legal v4.0 cargado correctamente.'), nl,
   write('Escriba "ayuda." para ver las consultas disponibles.'), nl,
   write('Escriba "iniciar_sistema." para comenzar.'), nl.
        
        
        `,
      sampleQueries: [
        "findall(P, (persona(P, _, _, eeuu), caso(P, _, _, alta, activo, _)), People).",
      ],
    },
  },
};

export default homeworkContent;
