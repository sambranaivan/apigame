var EFECTIVIDAD = new Array(18);
// Loop to create 2D array using 1D array
for (var i = 0; i < EFECTIVIDAD.length; i++) {
    EFECTIVIDAD[i] = new Array(18);
}
// Loop to initilize 2D array elements.
for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 18; j++) {
        EFECTIVIDAD[i][j] = 1;
    }
}




var TYPE = {
    ACERO: 0,
    AGUA: 1,
    BICHO: 2,
    DRAGON: 3,
    ELECTRICO: 4,
    FANTASMA: 5,
    FUEGO: 6,
    HADA: 7,
    HIELO: 8,
    LUCHA: 9,
    NORMAL: 10,
    PLANTA: 11,
    PSIQUICO: 12,
    ROCA: 13,
    SINIESTRO: 14,
    TIERRA: 15,
    VENENO: 16,
    VOLADOR: 17
}

var eng_type = {
    Steel: 0,
    Water: 1,
    Bug: 2,
    Dragon: 3,
    Electric: 4,
    Ghost: 5,
    Fire: 6,
    Fairy: 7,
    Ice: 8,
    Fight: 9,
    Normal: 10,
    Grass: 11,
    Psychic: 12,
    Rock: 13,
    Dark: 14,
    Earth: 15,
    Poison: 16,
    Flying: 17
}

EFECTIVIDAD[TYPE.ACERO][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.ACERO][TYPE.AGUA] = 0.5
EFECTIVIDAD[TYPE.ACERO][TYPE.ELECTRICO] = 0.5
EFECTIVIDAD[TYPE.ACERO][TYPE.FUEGO] = 0.5
EFECTIVIDAD[TYPE.ACERO][TYPE.HADA] = 2
EFECTIVIDAD[TYPE.ACERO][TYPE.HIELO] = 2
EFECTIVIDAD[TYPE.ACERO][TYPE.ROCA] = 2
//
EFECTIVIDAD[TYPE.AGUA][TYPE.AGUA] = 0.5
EFECTIVIDAD[TYPE.AGUA][TYPE.DRAGON] = 0.5
EFECTIVIDAD[TYPE.AGUA][TYPE.PLANTA] = 0.5
EFECTIVIDAD[TYPE.AGUA][TYPE.FUEGO] = 2
EFECTIVIDAD[TYPE.AGUA][TYPE.ROCA] = 2
EFECTIVIDAD[TYPE.AGUA][TYPE.TIERRA] = 2
//
EFECTIVIDAD[TYPE.BICHO][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.FANTASMA] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.FUEGO] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.HADA] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.LUCHA] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.VENENO] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.VOLADOR] = 0.5
EFECTIVIDAD[TYPE.BICHO][TYPE.PLANTA] = 2
EFECTIVIDAD[TYPE.BICHO][TYPE.PSIQUICO] = 2
EFECTIVIDAD[TYPE.BICHO][TYPE.SINIESTRO] = 2
//
EFECTIVIDAD[TYPE.DRAGON][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.DRAGON][TYPE.DRAGON] = 2
EFECTIVIDAD[TYPE.DRAGON][TYPE.HADA] = 0
//
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.AGUA] = 2
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.VOLADOR] = 2
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.DRAGON] = 0.5
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.ELECTRICO] = 0.5
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.PLANTA] = 0.5
EFECTIVIDAD[TYPE.ELECTRICO][TYPE.TIERRA] = 0
//
EFECTIVIDAD[TYPE.FANTASMA][TYPE.FANTASMA] = 2
EFECTIVIDAD[TYPE.FANTASMA][TYPE.NORMAL] = 0
EFECTIVIDAD[TYPE.FANTASMA][TYPE.PSIQUICO] = 2
EFECTIVIDAD[TYPE.FANTASMA][TYPE.SINIESTRO] = 0.5
//
EFECTIVIDAD[TYPE.FUEGO][TYPE.ACERO] = 2
EFECTIVIDAD[TYPE.FUEGO][TYPE.AGUA] = 0.5
EFECTIVIDAD[TYPE.FUEGO][TYPE.BICHO] = 2
EFECTIVIDAD[TYPE.FUEGO][TYPE.DRAGON] = 0.5
EFECTIVIDAD[TYPE.FUEGO][TYPE.FUEGO] = 0.5
EFECTIVIDAD[TYPE.FUEGO][TYPE.ROCA] = 0.5
EFECTIVIDAD[TYPE.FUEGO][TYPE.HIELO] = 2
EFECTIVIDAD[TYPE.FUEGO][TYPE.PLANTA] = 2
//
EFECTIVIDAD[TYPE.HIELO][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.HIELO][TYPE.AGUA] = 0.5
EFECTIVIDAD[TYPE.HIELO][TYPE.DRAGON] = 2
EFECTIVIDAD[TYPE.HIELO][TYPE.FUEGO] = 0.5
EFECTIVIDAD[TYPE.HIELO][TYPE.HIELO] = 0.5
EFECTIVIDAD[TYPE.HIELO][TYPE.TIERRA] = 2
EFECTIVIDAD[TYPE.HIELO][TYPE.VOLADOR] = 2
// 
EFECTIVIDAD[TYPE.LUCHA][TYPE.ACERO] = 2
EFECTIVIDAD[TYPE.LUCHA][TYPE.BICHO] = 0.5
EFECTIVIDAD[TYPE.LUCHA][TYPE.FANTASMA] = 0
EFECTIVIDAD[TYPE.LUCHA][TYPE.HADA] = 0.5
EFECTIVIDAD[TYPE.LUCHA][TYPE.HIELO] = 2
EFECTIVIDAD[TYPE.LUCHA][TYPE.NORMAL] = 2
EFECTIVIDAD[TYPE.LUCHA][TYPE.PSIQUICO] = 0.5
EFECTIVIDAD[TYPE.LUCHA][TYPE.ROCA] = 2
EFECTIVIDAD[TYPE.LUCHA][TYPE.SINIESTRO] = 2
EFECTIVIDAD[TYPE.LUCHA][TYPE.VENENO] = 0.5
EFECTIVIDAD[TYPE.LUCHA][TYPE.VOLADOR] = 0.5
//
EFECTIVIDAD[TYPE.NORMAL][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.NORMAL][TYPE.FANTASMA] = 0
EFECTIVIDAD[TYPE.NORMAL][TYPE.ROCA] = 0.5
// 
EFECTIVIDAD[TYPE.PLANTA][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.AGUA] = 2 
EFECTIVIDAD[TYPE.PLANTA][TYPE.BICHO] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.DRAGON] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.FUEGO] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.PLANTA] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.ROCA] = 2
EFECTIVIDAD[TYPE.PLANTA][TYPE.TIERRA] = 2
EFECTIVIDAD[TYPE.PLANTA][TYPE.VENENO] = 0.5
EFECTIVIDAD[TYPE.PLANTA][TYPE.VOLADOR] = 0.5
//
EFECTIVIDAD[TYPE.PSIQUICO][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.PSIQUICO][TYPE.LUCHA] = 2
EFECTIVIDAD[TYPE.PSIQUICO][TYPE.PSIQUICO] = 0.5
EFECTIVIDAD[TYPE.PSIQUICO][TYPE.SINIESTRO] = 0
EFECTIVIDAD[TYPE.PSIQUICO][TYPE.VENENO] = 2
//
EFECTIVIDAD[TYPE.ROCA][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.ROCA][TYPE.BICHO] = 2
EFECTIVIDAD[TYPE.ROCA][TYPE.FUEGO] = 2
EFECTIVIDAD[TYPE.ROCA][TYPE.HIELO] = 2
EFECTIVIDAD[TYPE.ROCA][TYPE.LUCHA] = 0.5
EFECTIVIDAD[TYPE.ROCA][TYPE.TIERRA] = 0.5
EFECTIVIDAD[TYPE.ROCA][TYPE.VOLADOR] = 2
// 
EFECTIVIDAD[TYPE.TIERRA][TYPE.ACERO] = 2
EFECTIVIDAD[TYPE.TIERRA][TYPE.BICHO] = 0.5
EFECTIVIDAD[TYPE.TIERRA][TYPE.ELECTRICO] = 2
EFECTIVIDAD[TYPE.TIERRA][TYPE.FUEGO] = 2
EFECTIVIDAD[TYPE.TIERRA][TYPE.PLANTA] = 0.5
EFECTIVIDAD[TYPE.TIERRA][TYPE.ROCA] = 2
EFECTIVIDAD[TYPE.TIERRA][TYPE.VENENO] = 2
EFECTIVIDAD[TYPE.TIERRA][TYPE.VOLADOR] = 0
// 
EFECTIVIDAD[TYPE.VENENO][TYPE.ACERO] = 0
EFECTIVIDAD[TYPE.VENENO][TYPE.FANTASMA] = 0.5
EFECTIVIDAD[TYPE.VENENO][TYPE.HADA] = 2
EFECTIVIDAD[TYPE.VENENO][TYPE.PLANTA] = 2
EFECTIVIDAD[TYPE.VENENO][TYPE.ROCA] = 0.5
EFECTIVIDAD[TYPE.VENENO][TYPE.TIERRA] = 0.5
EFECTIVIDAD[TYPE.VENENO][TYPE.VENENO] = 0.5
// 
EFECTIVIDAD[TYPE.VOLADOR][TYPE.ACERO] = 0.5
EFECTIVIDAD[TYPE.VOLADOR][TYPE.BICHO] = 2
EFECTIVIDAD[TYPE.VOLADOR][TYPE.ELECTRICO] = 0.5
EFECTIVIDAD[TYPE.VOLADOR][TYPE.LUCHA] = 2
EFECTIVIDAD[TYPE.VOLADOR][TYPE.PLANTA] = 2
EFECTIVIDAD[TYPE.VOLADOR][TYPE.ROCA] = 0.5

module.exports = {
    EFECTIVIDAD:EFECTIVIDAD,
    TYPE:TYPE,
    eng_type:eng_type
    }