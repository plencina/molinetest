import { create } from "zustand"

/*
puerta1: {
    estado: false,
    tickets: {
        correctos: 0,
        rechazados: 0
    }
}
*/
export const storeNoche = create((set)=> ({
    noche: 1,
    setNoche: (noche) => set((st)=>({ noche: noche }))
}))


export const storeTickets = create((set)=> ({
    vendidos: 0,
    ingresos: 0,
    reservas: 0,
    fetchData: async () => {
        try {
            const r = await fetch("/api", {
                method: "post",
                body: JSON.stringify({ event: 2 })
            })
            /*const { error, response } = await r.json()*/
            const response = await r.json()
            console.log(response)
            if (response.ok) {
                return set((st) => ({ vendidos: response.vendidos, ingresos: response.ingresos, reservas: response.reservas }))
            }
            if (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }
}))

export const storePuertas = create((set) => ({
    p1: {
        id: "Puerta 1",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p2: {
        id: "Puerta 2",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p3: {
        id: "Puerta 3",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p4: {
        id: "Puerta 4",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p5: {
        id: "Puerta 5",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p6: {
        id: "Puerta 6",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p7: {
        id: "Puerta 7",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p8: {
        id: "Puerta 8",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p9: {
        id: "Puerta 9",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p10: {
        id: "Puerta 10",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p11: {
        id: "Puerta 11",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p12: {
        id: "Puerta 12",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p13: {
        id: "Puerta 13",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p14: {
        id: "Puerta 14",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p15: {
        id: "Puerta 15",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p16: {
        id: "Puerta 16",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p17: {
        id: "Puerta 17",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p18: {
        id: "Puerta 18",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p19: {
        id: "Puerta 19",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p20: {
        id: "Puerta 20",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p21: {
        id: "Puerta 21",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p22: {
        id: "Puerta 22",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p23: {
        id: "Puerta 23",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    p24: {
        id: "Puerta 24",
        estado: false,
        tickets: {
            correctos: 0,
            rechazados: 0
        }
    },
    handlePuerta: (puerta, evento, valor) => set((state)=>{
        switch (evento) {
            case "estado":  
                return({ 
                    [puerta]: { ...state[puerta], estado: valor }})
                break;
            case "ticket":
                if (valor == "correcto") {
                    return({ 
                        [puerta] : {
                            id:  state[puerta].id,
                            estado: state[puerta].estado,
                            tickets: { 
                                correctos: state[puerta].tickets.correctos + 1,
                                rechazados: state[puerta].tickets.rechazados
                            }}})
                }
                if (valor == "rechazado") {
                    return({ 
                        [puerta] : { 
                            id:  state[puerta].id,
                            estado: state[puerta].estado,
                            tickets: { 
                                rechazados: state[puerta].tickets.rechazados + 1, 
                                correctos: state[puerta].tickets.correctos 
                            }}})
                }
            default:
                return({})
                break;
        }
    })
    
  }));



  /*
  
      puertas: {
        sur: {
            ayacucho: {

                puerta1: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta2: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta3: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta4: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta5: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta6: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta7: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta8: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
            }
        },
        norte: {
            ayacucho: {

                puerta1: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta2: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta3: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta4: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta5: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta6: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta7: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta8: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
            },
            maipu: {

                puerta1: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta2: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta3: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta4: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta5: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta6: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta7: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
                puerta8: {
                    estado: false,
                    tickets: {
                        correctos: 0,
                        rechazados: 0
                    }
                },
            }
        },
    },
  
  */