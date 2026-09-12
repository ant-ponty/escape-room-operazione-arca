// DATI PRECARICATI - OPERAZIONE ARCA

const ESCAPE_ROOM_DATA = {
    title: "OPERAZIONE ARCA",
    agenti: [
        { nome: "Miriam", codice: "FALCO", eta: 12, zona: "Cameretta 1 + Corridoio" },
        { nome: "Laura", codice: "LINCE", eta: 9, zona: "Cameretta 2 + Bagno" }
    ],
    durata: "70-85 minuti",
    tema: "Recuperare l'ARCA dai pirata VULTURE",

    // ENIGMI FASE 1
    fase1: [
        {
            id: "F1-0",
            numero: 0,
            titolo: "Lettera di Convocazione",
            contenitore: "Busta (consegnata da GM all'inizio)",
            codice: "-",
            output: "Avvia la missione, indica di cercare il fascicolo",
            dove: "Consegnata a mano",
            note: "Lettera da leggere ad alta voce"
        },
        {
            id: "F1-1",
            numero: 1,
            titolo: "Il Fascicolo VULTURE - Profilo del Sospetto",
            contenitore: "Poster A3",
            codice: "3140 (orario furto + numero porta)",
            output: "Codice per lucchetto GRIGIO Fase 3",
            dove: "Sotto/dietro il divano (salone)",
            note: "⚠️ Ricordare: l'orario 03:14 serve per il baule pirata in Fase 3!"
        },
        {
            id: "F1-2",
            numero: 2,
            titolo: "Sblocco Kit Agenti",
            contenitore: "Cassettina ROSA con chiave",
            codice: "Chiave fisica nel ghiaccio (congelatore)",
            output: "Tesserini Agenti + Torcia UV + Ordine di separazione",
            dove: "Cassettina rosa sul tavolo salone; chiave in congelatore (bicchiere d'acqua ghiacciata)",
            note: "⏱️ 10-15 minuti per scongelare la chiave. Usate acqua calda."
        }
    ],

    // ENIGMI PERCORSO FALCO (Fase 2)
    falco: [
        {
            id: "F2-F1",
            numero: "F1",
            titolo: "Griglia inglese-animali (Archivio Fauna)",
            contenitore: "Dizionario inglese (cassettina a chiave)",
            codice: "Chiave fisica dietro testiera letto",
            output: "Tabella colori animali - INFO PER LINCE",
            dove: "Libreria cameretta 1; chiave legata con spago dietro testiera",
            datiTabella: {
                "LION": "GIALLO",
                "ELEPHANT": "GRIGIO",
                "PARROT": "VERDE",
                "ZEBRA": "BIANCO",
                "TIGER": "ARANCIONE"
            },
            dipendenza: "Laura (L2) ha bisogno di questi colori"
        },
        {
            id: "F2-F2",
            numero: "F2",
            titolo: "Orario dei voli (Calcolo ore in formato 24h)",
            contenitore: "Cassettina 4 cifre nera/grigia",
            codice: "1745",
            output: "Rotta Aerea + INFO PER LINCE (numero zampe animali)",
            dove: "Armadio cameretta 1, sotto vestiti piegati",
            traccia: "Five forty-five in the afternoon = 17:45 (senza due punti)",
            info: "Trasmetti a Laura: RAGNO=8, SCARABEO=6, GATTO=4, STRUZZO=2"
        },
        {
            id: "F2-F3",
            numero: "F3",
            titolo: "Enigma della Torre Eiffel",
            contenitore: "Cassetta TORRE EIFFEL (lucchetto VERDE 4 cifre)",
            codice: "2408",
            output: "METÀ A del Sigillo Finale + parola chiave SAVANA",
            dove: "Sotto il letto cameretta 1",
            traccia: "Il codice è nel tuo TESSERINO (matricola F-2408)",
            sigillo: "Metà sinistra - taglia a zig-zag"
        }
    ],

    // ENIGMI PERCORSO LINCE (Fase 2)
    lince: [
        {
            id: "F2-L1",
            numero: "L1",
            titolo: "Scritte UV nel bagno (Luce Invisibile)",
            contenitore: "Scritte con penna UV su superfici (nessun contenitore)",
            codice: "Torcia UV per leggere",
            output: "Impronte Segrete (4 lettere) + INFO PER FALCO",
            dove: "Bagno senza finestre - specchio, retro porta, piastrella, WC",
            lettere: {
                "1": "O",
                "2": "I",
                "3": "O",
                "4": "O"
            },
            bonus: "584 (codice cassettina legno)",
            dipendenza: "Miriam (F2) ha bisogno delle lettere per compilare rotta"
        },
        {
            id: "F2-L2",
            numero: "L2",
            titolo: "Somma degli animali (Censimento Santuario)",
            contenitore: "Cassettina 3 cifre legno chiaro",
            codice: "584",
            output: "Censimento + INFO PER FALCO (orari partenza)",
            dove: "Cesto/scatola giochi camera 2, in fondo",
            animali: {
                "GIALLO (Leone)": 12,
                "GRIGIO (Elefante)": 5,
                "VERDE (Pappagallo)": 30,
                "BIANCO (Zebra)": 8,
                "ARANCIONE (Tigre)": 3
            },
            info: "Trasmetti a Miriam: ROMA 08:00, PARIGI 11:30, LONDRA 14:15, NAIROBI 17:45"
        },
        {
            id: "F2-L3",
            numero: "L3",
            titolo: "Enigma dell'Albero Fiorito",
            contenitore: "Cassetta ALBERO FIORITO (lucchetto ROSA 3 cifre)",
            codice: "713",
            output: "METÀ B del Sigillo Finale + parola chiave FORESTA",
            dove: "Dietro porta o dietro tenda camera giochi",
            calcolo: "(RAGNO-1) | (GATTO×STRUZZO÷8) | SCARABEO÷2 = 7 | 1 | 3",
            traccia: "Il codice corrisponde alla tua matricola L-0713 (dal tesserino!)",
            sigillo: "Metà destra - taglia a zig-zag"
        }
    ],

    // ENIGMI FASE 3
    fase3: [
        {
            id: "F3-I1",
            numero: "I1",
            titolo: "Unione dei due Sigilli",
            contenitore: "Baule pirata (lucchetto GRIGIO 4 cifre)",
            codice: "3140 (dall'enigma 1 - ora del furto!)",
            output: "La Bussola dei Biomi",
            dove: "Mobile corridoio",
            nota: "Ricordano il poster A3 dell'inizio!"
        },
        {
            id: "F3-I2",
            numero: "I2",
            titolo: "Bussola dei Biomi (SAVANA + FORESTA)",
            contenitore: "Lucchetto GIALLO 3 cifre su mobile/anta",
            codice: "926",
            output: "Cartoncino: 'L'ultima serratura non ha numeri. Ha le vostre età'",
            dove: "Mobile corridoio",
            calcolo: "SAVANA(9) | FORESTA(2) | totale biomi(7) = 926"
        },
        {
            id: "F3-I3",
            numero: "I3",
            titolo: "La Cassaforte delle Età (Finale biologico)",
            contenitore: "Mini cassaforte arancione (manopola)",
            codice: "9 sinistra (Laura, 9) → 12 destra (Miriam, 12)",
            output: "Chiave finale valigia + biglietto congratulazioni",
            dove: "Bagno grande, sotto lavandino",
            nota: "⭐ MOMENTO EMOTIVO: il codice sono LORO!"
        },
        {
            id: "F3-I4",
            numero: "I4",
            titolo: "VALIGIA BLU - L'ARCA È SALVATA!",
            contenitore: "Valigia blu (lucchetto NERO 3 cifre)",
            codice: "412",
            output: "🎁 IL REGALO FINALE",
            dove: "Camera genitori (sotto letto o armadio)",
            nota: "4=zampe leone | 1=ARCA da salvare | 2=agenti"
        }
    ],

    // TUTTI I CODICI (RISERVATO GM)
    codici: [
        { serratura: "Cassettina 4 cifre (FALCO)", codice: "1745", dove: "F2-F2", nota: "Five forty-five afternoon" },
        { serratura: "Cassettina 3 cifre (LINCE)", codice: "584", dove: "F2-L2", nota: "Somma censimento" },
        { serratura: "Lucchetto VERDE 4 cifre", codice: "2408", dove: "F2-F3", nota: "Matricola FALCO" },
        { serratura: "Lucchetto ROSA 3 cifre", codice: "713", dove: "F2-L3", nota: "Matricola LINCE" },
        { serratura: "Lucchetto GRIGIO 4 cifre", codice: "3140", dove: "F3-I1", nota: "Orario furto 03:14 + porta 0" },
        { serratura: "Lucchetto GIALLO 3 cifre", codice: "926", dove: "F3-I2", nota: "Savana + Foresta + biomi totali" },
        { serratura: "Cassaforte arancione", codice: "9 sx → 12 dx", dove: "F3-I3", nota: "Età agenti" },
        { serratura: "Lucchetto NERO 3 cifre (valigia)", codice: "412", dove: "F3-I4", nota: "4 zampe | 1 ARCA | 2 agenti" },
        { serratura: "Chiave cassettina ROSA", codice: "Fisica (ghiaccio)", dove: "F1-2", nota: "Congelatore, bicchiere d'acqua" },
        { serratura: "Chiave dizionario", codice: "Fisica (spago)", dove: "F2-F1", nota: "Dietro testiera letto" }
    ],

    // CHECKLIST ALLESTIMENTO
    checklist: [
        {
            categoria: "Preparazione la sera prima",
            items: [
                "Congela la chiave cassettina rosa in bicchiere d'acqua",
                "Imposta tutti i lucchetti (vedi tabella codici)",
                "Testa la penna UV sulle superfici del bagno",
                "Stampa e ritaglia tutti i documenti",
                "Taglia il SIGILLO a metà con taglio a zig-zag",
                "Ritaglia i 2 tesserini agenti (85x55mm)"
            ]
        },
        {
            categoria: "Nasconde FASE 1 (Salone)",
            items: [
                "Poster A3 'Profilo Sospetto' sotto/dietro divano",
                "Cassettina ROSA sul tavolo (ben visibile)",
                "Lettera di convocazione in busta da consegnare",
                "Bicchiere ghiacciato nel congelatore"
            ]
        },
        {
            categoria: "Nascondi PERCORSO FALCO (Cameretta 1 + Corridoio)",
            items: [
                "Chiave dizionario dietro testiera letto (con spago)",
                "Dizionario inglese su mensola/libreria",
                "Cassettina 4 cifre (1745) nell'armadio sotto vestiti",
                "Cassetta TORRE EIFFEL + lucchetto VERDE sotto letto",
                "Metà SIGILLO A dentro cassetta Torre Eiffel"
            ]
        },
        {
            categoria: "Nascondi PERCORSO LINCE (Cameretta 2 + Bagno)",
            items: [
                "Scritti UV con penna sul specchio (1-O), retro porta (2-I), piastrella (3-O), WC (4-O)",
                "Scritto UV sul muro: LINCE → 584",
                "Cartoncino 'Protocollo Luce Nera' sul lavandino",
                "Cassettina 3 cifre (584) nel cesto giochi, in fondo",
                "Cassetta ALBERO FIORITO + lucchetto ROSA dietro porta/tenda",
                "Metà SIGILLO B dentro cassetta Albero Fiorito"
            ]
        },
        {
            categoria: "Nascondi FASE 3 (Corridoio + Bagno + Camera Genitori)",
            items: [
                "Baule pirata + lucchetto GRIGIO nel mobile corridoio",
                "Lucchetto GIALLO (926) su anta mobile corridoio",
                "Cartoncino 'L'ultima serratura' dentro lucchetto giallo",
                "Cassaforte arancione sotto lavandino bagno grande",
                "Valizia BLU + lucchetto NERO + regalo sotto letto genitori"
            ]
        },
        {
            categoria: "Verifica finale",
            items: [
                "Tutti i lucchetti impostati e testati",
                "Tutti i fogli stampati e in posto",
                "Tutti i nascondigli raggiungibili in sicurezza",
                "Torcia UV funzionante",
                "Cronometro pronto",
                "Leggi la guida GM una volta"
            ]
        }
    ],

    // AIUTI GRADUALI
    aiuti: [
        {
            enigma: "Poster A3 - non lo trovano",
            livelli: [
                "L1: 'L'informatore ha detto: dove ci si siede.'",
                "L2: 'Sotto o dietro. Non sopra.'",
                "L3: Sposta tu il cuscino del divano fingendo di sistemare"
            ]
        },
        {
            enigma: "Five forty-five in the afternoon",
            livelli: [
                "L1: 'Five = cinque. Forty-five = quarantacinque.'",
                "L2: 'Afternoon = pomeriggio. Le cinque del pomeriggio, come si dice in orario militare?'",
                "L3: 'Le 17:45. Scrivilo senza i due punti.'"
            ]
        },
        {
            enigma: "Laura non trova le scritte UV",
            livelli: [
                "L1: 'La luce deve essere proprio spenta. Chiudi bene la porta.'",
                "L2: 'Hai guardato dietro la porta? E lo specchio?'",
                "L3: Indicagli fisicamente il punto con la torcia UV accesa"
            ]
        },
        {
            enigma: "Non collegano 2408 al tesserino",
            livelli: [
                "L1: 'Cos'hai in tasca che ha un numero a 4 cifre?'",
                "L2: 'Rileggi il tuo tesserino. Riga per riga.'",
                "L3: 'La matricola! F-2408. Quel numero!'"
            ]
        },
        {
            enigma: "Si bloccano sui calcoli delle zampe",
            livelli: [
                "L1: 'Miriam ha detto: ragno 8, scarabeo 6, gatto 4, struzzo 2'",
                "L2: 'Fai il primo calcolo insieme: 8-1=7'",
                "L3: 'Poi tu fai gli altri due da sola. Vai!'"
            ]
        },
        {
            enigma: "Non ricordano il 3140 per il baule pirata",
            livelli: [
                "L1: 'Il sigillo dice: l'ora del furto. Dove l'abbiamo letta?'",
                "L2: 'Riprendete il poster grande dell'inizio.'",
                "L3: 'Ore 03:14 della notte. Porta 0. Insieme: 3140.'"
            ]
        }
    ]
};