/////////////////////            ////////////////////
////////////////////   CLIENTES /////////////////////
/////////////////////           /////////////////////


/////// LISTAGEM TOTAL
const handleGetAllClientes = document.getElementById('listarClientes');
handleGetAllClientes.addEventListener('click', () => {

    $('li').remove()
     axios.get("http://localhost:3000/clientes").then((dados) => {
         const clientes = dados.data;
         let listaClientes = document.getElementById('clientesResultsUl')
            clientes.forEach((cliente)=>{
                let listaCreate = document.createElement('li');
                listaCreate.innerHTML = `ID: ${cliente.id} - Nome: ${cliente.nome} - Idade: ${cliente.idade} - CPF: ${cliente.cpf}`;
                listaClientes.appendChild(listaCreate);
            })        
  });

});

        
/////// LISTAGEM ID
const handleGetidCliente = document.getElementById('listarCliente');
handleGetidCliente.addEventListener('click', () => {
    $('li').remove()
    const id = document.getElementById('idClientes').value;
    axios.get(`http://localhost:3000/cliente/${id}`).then((dados) => {
        const clientesId = dados.data;
        let listaCliente = document.getElementById('clientesResultsUl')
        let listaCreate = document.createElement('li');
        listaCliente.innerHTML = `ID: ${clientesId.id} - Nome: ${clientesId.nome} - Idade: ${clientesId.idade} - CPF: ${clientesId.cpf}`;    
        listaCliente.appendChild(listaCreate);
    })
})


/////// INSERIR
const inserirCliente = document.getElementById('criarCliente')
inserirCliente.addEventListener('click', (e) => {
    e.preventDefault()
    let nameCliente = document.getElementById("name")
    let ageCliente = document.getElementById("age")
    let docCliente = document.getElementById("doc")

    let jsonCliente = {
        nome: nameCliente.value,
        idade: ageCliente.value,
        cpf: docCliente.value,
    }
    axios.post("http://localhost:3000/clientes", jsonCliente).then((response) => {
        if (response.status == 200) {
            alert("cliente cadastrado")
            document.location.reload()
        }
    })
        .catch(e => { alert("erro") })

})


//////// DELETAR
const deletarCliente = document.getElementById('deletarCliente')
deletarCliente.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('deleteidCliente')
    axios.delete(`http://localhost:3000/cliente/${id.value}`)
        .then((res) => {
            if (res.status == 200) {
                alert("cliente deletado")
                document.location.reload()
            }
        })

})


//////ATUALIZAR
const editarCliente = document.getElementById('atualizarCliente')
editarCliente.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('updateidCliente')
    let nameCliente = document.getElementById("updatenomeCliente")
    let ageCliente = document.getElementById("updateidadeCliente")
    let docCliente = document.getElementById("updatecpfCliente")

    let jsonCliente = {
        nome: nameCliente.value,
        idade: ageCliente.value,
        cpf: docCliente.value,
    }

    axios.patch(`http://localhost:3000/cliente/${id.value}`, jsonCliente).then(() => {
        alert("usuario atualizado com sucesso")
        document.location.reload()
    })
})


/////////////////////            ////////////////////
////////////////////   SALAS /////////////////////
/////////////////////           /////////////////////


/////// LISTAGEM TOTAL
const handleGetAllSalas = document.getElementById('listarSalas');
handleGetAllSalas.addEventListener('click', () => {

     $('li').remove()
     axios.get("http://localhost:3000/salas").then((dados) => {
         const salas = dados.data;
         let listaSalas = document.getElementById('clientesResultsUl')
            salas.forEach((sala)=>{
                let listaCreate = document.createElement('li');
                listaCreate.innerHTML = `ID: ${sala.id} - Tipo: ${sala.tipo} - Fileiras: ${sala.fileiras} - Cadeiras: ${sala.cadeiras}`;
                listaSalas.appendChild(listaCreate);
            })        
  });

});

        
/////// LISTAGEM ID
const handleGetidSala = document.getElementById('listarSala');
handleGetidSala.addEventListener('click', () => {
    $('li').remove()
    const id = document.getElementById('idSalas').value;
    axios.get(`http://localhost:3000/sala/${id}`).then((dados) => {
        const salasId = dados.data;
        let listaSala = document.getElementById('clientesResultsUl')
        let listaCreate = document.createElement('li');
        listaSala.innerHTML = `ID: ${salasId.id} - Tipo: ${salasId.fileiras} - Fileiras: ${salasId.fileiras} - Cadeiras: ${salasId.cadeiras}`;    
        listaSala.appendChild(listaCreate);
    })
})


/////// INSERIR
const inserirSala = document.getElementById('criarSala')
inserirSala.addEventListener('click', (e) => {
    e.preventDefault()
    let fileiras = document.getElementById("fileiraSalas")
    let tipo = document.getElementById("tipoSalas")
    let cadeiras = document.getElementById("cadeirasSalas")

    let jsonCliente = {
        fileiras: fileiras.value,
        tipo: tipo.value,
        cadeiras: cadeiras.value,
    }
    axios.post("http://localhost:3000/salas", jsonCliente).then((response) => {
        if (response.status == 200) {
            alert("sala cadastrada")
            document.location.reload()
        }
    })
        .catch(e => { alert("erro") })

})


//////// DELETAR
const deletarSala = document.getElementById('deletarSala')
deletarSala.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('deleteidSalas')
    axios.delete(`http://localhost:3000/sala/${id.value}`)
        .then((res) => {
            if (res.status == 200) {
                alert("sala deletada")
                document.location.reload()
            }
        }).catch(e=>{alert(e)})

})


//////ATUALIZAR
const editarSala = document.getElementById('atualizarSala')
editarSala.addEventListener('click', (e) => {
   
    e.preventDefault()
    let id = document.getElementById('updateidSala')

    let fileiras = document.getElementById("updatefileirasSalas")
    let tipo = document.getElementById("updatetipoSalas")
    let cadeiras = document.getElementById("updatecadeirasSalas")

    let jsonCliente = {
        fileiras: fileiras.value,
        tipo: tipo.value,
        cadeiras: cadeiras.value,
    }

    axios.patch(`http://localhost:3000/sala/${id.value}`, jsonCliente).then(() => {
        alert("sala atualizado com sucesso")
        document.location.reload()
    })
})


/////////////////////            ////////////////////
////////////////////   LANCHES /////////////////////
/////////////////////           /////////////////////


/////// LISTAGEM TOTAL
const handleGetAllLanches = document.getElementById('listarLanches');
handleGetAllLanches.addEventListener('click', () => {
    $('li').remove()
     axios.get("http://localhost:3000/lanches").then((dados) => {
         const lanches = dados.data;
         let listaLanches = document.getElementById('clientesResultsUl')
            lanches.forEach((lanche)=>{
                let listaCreate = document.createElement('li');
                listaCreate.innerHTML = `ID: ${lanche.id} - Nome: ${lanche.nome} - Preço: ${lanche.preco} - Validade: ${lanche.data_validade}`;
                listaLanches.appendChild(listaCreate);
            })        
  });

});

        
/////// LISTAGEM ID
const handleGetidLanche = document.getElementById('listarLanche');
handleGetidLanche.addEventListener('click', () => {
    $('li').remove()
    const id = document.getElementById('idLanches').value;
    axios.get(`http://localhost:3000/lanche/${id}`).then((dados) => {
        const lanchesId = dados.data;
        let listaLanches = document.getElementById('clientesResultsUl')
        let listaCreate = document.createElement('li');
        listaLanches.innerHTML = `ID: ${lanchesId.id} - Nome: ${lanchesId.nome} - Preço: ${lanchesId.preco} - Validade: ${lanchesId.data_validade}`;   
        listaLanches.appendChild(listaCreate);
    })
})


/////// INSERIR
const inserirLanche = document.getElementById('criarLanche')
inserirLanche.addEventListener('click', (e) => {
    e.preventDefault()
    let nome = document.getElementById("nameLanches")
    let preco = document.getElementById("priceLanches")
    let validade = document.getElementById("validLanches")

    let jsonCliente = {
        nome: nome.value,
        preco: preco.value,
        data_validade: validade.value,
    }
    axios.post("http://localhost:3000/lanches", jsonCliente).then((response) => {
        if (response.status == 200) {
            alert("lanche cadastrado")
            document.location.reload()
        }
    })
        .catch(e => { alert("erro") })

})


//////// DELETAR
const deletarLanche = document.getElementById('deletarLanche')
deletarLanche.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('deleteidLanches')
    axios.delete(`http://localhost:3000/lanche/${id.value}`)
        .then((res) => {
            if (res.status == 200) {
                alert("lanche deletado")
                document.location.reload()
            }
        })

})


//////ATUALIZAR
const editarLanche = document.getElementById('atualizarLanche')
editarLanche.addEventListener('click', (e) => {
    
    e.preventDefault()
    let id = document.getElementById('updateidLanches')
    let nome = document.getElementById("updatenomeLanches")
    let preco = document.getElementById("updateprecoLanches")
    let validade = document.getElementById("updatevalidLanches")
    
    let jsonCliente = {
        nome: nome.value,
        preco: preco.value,
        data_validade: validade.value,
    }

    axios.patch(`http://localhost:3000/lanche/${id.value}`, jsonCliente).then(() => {
        alert("Lanche atualizado com sucesso")
        document.location.reload()
    }).catch(e=>{alert(e)})
})


/////////////////////            ////////////////////
////////////////////   FILMES /////////////////////
/////////////////////           /////////////////////


/////// LISTAGEM TOTAL
const handleGetAllFilmes = document.getElementById('listarFilmes');
handleGetAllFilmes.addEventListener('click', () => {

    $('li').remove()
     axios.get("http://localhost:3000/filmes").then((dados) => {
         const filmes = dados.data;
         let listaFilmes = document.getElementById('clientesResultsUl')
            filmes.forEach((filme)=>{
                let listaCreate = document.createElement('li');
                listaCreate.innerHTML = `ID: ${filme.id} - Titulo: ${filme.titulo} - Gênero: ${filme.genero} - Lançamento: ${filme.lancamento} - Classificação: ${filme.classificacao}`;
                listaFilmes.appendChild(listaCreate);
            })        
  });

});

        
/////// LISTAGEM ID
const handleGetidFilme = document.getElementById('listarFilme');
handleGetidFilme.addEventListener('click', () => {
    $('li').remove()
    const id = document.getElementById('idFilmes').value;
    axios.get(`http://localhost:3000/filme/${id}`).then((dados) => {
        const FilmesId = dados.data;
        let listaFilme = document.getElementById('clientesResultsUl')
        let listaCreate = document.createElement('li');
        listaFilme.innerHTML = `ID: ${FilmesId.id} - Titulo: ${FilmesId.titulo} - Gênero: ${FilmesId.genero} - Lançamento: ${FilmesId.lancamento} - Classificação: ${FilmesId.classificacao}`;   
        console.log(listaFilme)
        listaFilme.appendChild(listaCreate);
    })
})


/////// INSERIR
const inserirFilme = document.getElementById('criarFilme')
inserirFilme.addEventListener('click', (e) => {
    e.preventDefault()

    let titulo = document.getElementById("titleFilmes")
    let genero = document.getElementById("genderFilmes")
    let lancamento = document.getElementById("lancFilmes")
    let classificacao = document.getElementById("classifFilmes")

    let jsonCliente = {
        titulo: titulo.value,
        genero:genero.value,
        lancamento:lancamento.value,
        classificacao:classificacao.value
    }
    axios.post("http://localhost:3000/filmes", jsonCliente).then((response) => {
    
          alert("filme cadastrado")
            document.location.reload()
        
    })
        .catch(e => { alert("erro") })

})


//////// DELETAR
const deletarFilme = document.getElementById('deletarFilme')
deletarFilme.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('deleteidFilmes')
    axios.delete(`http://localhost:3000/cliente/${id.value}`)
        .then((res) => {
            if (res.status == 200) {
                alert("filme deletado")
                document.location.reload()
            }
        })

})


//////ATUALIZAR
const editarFilme = document.getElementById('atualizarFilme')
editarFilme.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('updateidFilmes')
    
    let titulo = document.getElementById("updatetituloFilmes")
    let genero = document.getElementById("updategenderFilmes")
    let lancamento = document.getElementById("updatelancamentoFilmes")
    let classificacao = document.getElementById("updateclassificaFilmes")

    let jsonCliente = {
        titulo: titulo.value,
        genero:genero.value,
        lancamento:lancamento.value,
        classificacao:classificacao.value
    }

    axios.patch(`http://localhost:3000/filme/${id.value}`, jsonCliente).then(() => {
        alert("usuario atualizado com sucesso")
        document.location.reload()
    })
})



/////////////////////            ////////////////////
////////////////////  FUNCIONARIOS /////////////////////
/////////////////////           /////////////////////


/////// LISTAGEM TOTAL
const handleGetAllFuncionarios = document.getElementById('listarFuncionarios');
handleGetAllFuncionarios.addEventListener('click', () => {

    $('li').remove()
     axios.get("http://localhost:3000/funcionarios").then((dados) => {
         const funcionarios = dados.data;
         let listaFuncionarios = document.getElementById('clientesResultsUl')
            funcionarios.forEach((funcionarios)=>{
                let listaCreate = document.createElement('li');
                listaCreate.innerHTML = `ID: ${funcionarios.id} - Nome: ${funcionarios.nome} - Salário: ${funcionarios.idade} - Turno: ${funcionarios.cpf} -  Cargo: ${funcionarios.cargo}`;
                listaFuncionarios.appendChild(listaCreate);
            })        
  });

});

        
/////// LISTAGEM ID
const handleGetidFuncionario = document.getElementById('listarFuncionario');
handleGetidFuncionario.addEventListener('click', () => {
    $('li').remove()
    const id = document.getElementById('idFuncionarios').value;
    axios.get(`http://localhost:3000/funcionario/${id}`).then((dados) => {
        const funcionariosId = dados.data;
        let listaFuncionario = document.getElementById('clientesResultsUl')
        let listaCreate = document.createElement('li');
        listaFuncionario.innerHTML = `ID: ${funcionariosId.id} - Nome: ${funcionariosId.nome} - Salário: ${funcionariosId.idade} - Turno: ${funcionariosId.cpf} -  Cargo: ${funcionariosId.cargo}`   
        listaFuncionario.appendChild(listaCreate);
    })
})


/////// INSERIR
const inserirFuncionario = document.getElementById('criarFuncionario')
inserirFuncionario.addEventListener('click', (e) => {
    e.preventDefault()
    let nome = document.getElementById("nameFuncionarios")
    let salario = document.getElementById("salarioFuncionarios")
    let turno = document.getElementById("turnoFuncionarios")
    let cargo = document.getElementById("cargoFuncionarios")

    let jsonCliente = {
        nome: nome.value,
        salario: salario.value,
        turno: turno.value,
        cargo: cargo.value
    }
    axios.post("http://localhost:3000/funcionarios", jsonCliente).then((response) => {
        if (response.status == 200) {
            alert("funcionario cadastrado")
            document.location.reload()
        }
    })
        .catch(e => { alert("erro") })

})


//////// DELETAR
const deletarFuncionario = document.getElementById('deletarFuncionario')
deletarFuncionario.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('deleteidFuncionario')
    axios.delete(`http://localhost:3000/funcionario/${id.value}`)
        .then((res) => {
            if (res.status == 200) {
                alert("funcionario deletado")
                document.location.reload()
            }
        })

})


//////ATUALIZAR
const editarFuncionario = document.getElementById('atualizarFuncionario')
editarFuncionario.addEventListener('click', (e) => {
    e.preventDefault()
    let id = document.getElementById('updateidFuncionarios')

    let nome = document.getElementById("updatenomeFuncionarios")
    let salario = document.getElementById("updatesalarioFuncionarios")
    let turno = document.getElementById("updateturnoFuncionarios")
    let cargo = document.getElementById("updatecargoFuncionarios")

    let jsonCliente = {
        nome: nome.value,
        salario: salario.value,
        turno: turno.value,
        cargo: cargo.value
    }

    axios.patch(`http://localhost:3000/funcionario/${id.value}`, jsonCliente).then(() => {
        alert("funcionario atualizado com sucesso")
        document.location.reload()
    })
})