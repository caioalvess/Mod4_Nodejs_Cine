

// filter entidades


    const menuTabs = document.querySelector('.menu-tabs');
    menuTabs.addEventListener('click', (e) => {
        if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
            const target = e.target.getAttribute('data-target');
            menuTabs.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            displaySection = document.querySelector('.display-section');
            displaySection.querySelector('.menu-tab-content.active').classList.remove('active');
            displaySection.querySelector(target).classList.add('active');
        }
    });


    const changeClientes = document.querySelector('.reqCliente')
    changeClientes.addEventListener('change', () => {
        if(changeClientes.value == 'buscarCliente') {
            document.getElementById('getCliente').classList.add('activer');
            document.getElementById('createCliente').classList.remove('activer');
            document.getElementById('getIdCliente').classList.remove('activer');
            document.getElementById('deleteIdCliente').classList.remove('activer');
            document.getElementById('updateIdCliente').classList.remove('activer');
        }
        if(changeClientes.value == 'criarCliente') {
            document.getElementById('getCliente').classList.remove('activer');
            document.getElementById('createCliente').classList.add('activer');
            document.getElementById('getIdCliente').classList.remove('activer');
            document.getElementById('deleteIdCliente').classList.remove('activer');
            document.getElementById('updateIdCliente').classList.remove('activer');
        }
        if(changeClientes.value == 'buscar/idCliente') {
            document.getElementById('getCliente').classList.remove('activer');
            document.getElementById('createCliente').classList.remove('activer');
            document.getElementById('getIdCliente').classList.add('activer');
            document.getElementById('deleteIdCliente').classList.remove('activer');
            document.getElementById('updateIdCliente').classList.remove('activer');
        }
        if(changeClientes.value == 'delete/idCliente') {
            document.getElementById('getCliente').classList.remove('activer');
            document.getElementById('createCliente').classList.remove('activer');
            document.getElementById('getIdCliente').classList.remove('activer');
            document.getElementById('deleteIdCliente').classList.add('activer');
            document.getElementById('updateIdCliente').classList.remove('activer');
        }
        if(changeClientes.value == 'update/idCliente') {
            document.getElementById('getCliente').classList.remove('activer');
            document.getElementById('createCliente').classList.remove('activer');
            document.getElementById('getIdCliente').classList.remove('activer');
            document.getElementById('deleteIdCliente').classList.remove('activer');
            document.getElementById('updateIdCliente').classList.add('activer');
        }
    })


    const changeSalas = document.querySelector('.reqSalas')
    changeSalas.addEventListener('change', () => {
        if(changeSalas.value == 'buscarSalas') {
            document.getElementById('getSalas').classList.add('activer');
            document.getElementById('createSalas').classList.remove('activer');
            document.getElementById('getIdSalas').classList.remove('activer');
            document.getElementById('deleteIdSalas').classList.remove('activer');
            document.getElementById('updateIdSalas').classList.remove('activer');
        }
        if(changeSalas.value == 'criarSalas') {
            document.getElementById('getSalas').classList.remove('activer');
            document.getElementById('createSalas').classList.add('activer');
            document.getElementById('getIdSalas').classList.remove('activer');
            document.getElementById('deleteIdSalas').classList.remove('activer');
            document.getElementById('updateIdSalas').classList.remove('activer');
        }
        if(changeSalas.value == 'buscar/idSalas') {
            document.getElementById('getSalas').classList.remove('activer');
            document.getElementById('createSalas').classList.remove('activer');
            document.getElementById('getIdSalas').classList.add('activer');
            document.getElementById('deleteIdSalas').classList.remove('activer');
            document.getElementById('updateIdSalas').classList.remove('activer');
        }
        if(changeSalas.value == 'delete/idSalas') {
            document.getElementById('getSalas').classList.remove('activer');
            document.getElementById('createSalas').classList.remove('activer');
            document.getElementById('getIdSalas').classList.remove('activer');
            document.getElementById('deleteIdSalas').classList.add('activer');
            document.getElementById('updateIdSalas').classList.remove('activer');
        }
        if(changeSalas.value == 'update/idSalas') {
            document.getElementById('getSalas').classList.remove('activer');
            document.getElementById('createSalas').classList.remove('activer');
            document.getElementById('getIdSalas').classList.remove('activer');
            document.getElementById('deleteIdSalas').classList.remove('activer');
            document.getElementById('updateIdSalas').classList.add('activer');
        }
    })

    const changeLanches = document.querySelector('.reqLanches')
    changeLanches.addEventListener('change', () => {
        if(changeLanches.value == 'buscarLanches') {
            document.getElementById('getLanches').classList.add('activer');
            document.getElementById('createLanches').classList.remove('activer');
            document.getElementById('getIdLanches').classList.remove('activer');
            document.getElementById('deleteIdLanches').classList.remove('activer');
            document.getElementById('updateIdLanches').classList.remove('activer');
        }
        if(changeLanches.value == 'criarLanches') {
            document.getElementById('getLanches').classList.remove('activer');
            document.getElementById('createLanches').classList.add('activer');
            document.getElementById('getIdLanches').classList.remove('activer');
            document.getElementById('deleteIdLanches').classList.remove('activer');
            document.getElementById('updateIdLanches').classList.remove('activer');
        }
        if(changeLanches.value == 'buscar/idLanches') {
            document.getElementById('getLanches').classList.remove('activer');
            document.getElementById('createLanches').classList.remove('activer');
            document.getElementById('getIdLanches').classList.add('activer');
            document.getElementById('deleteIdLanches').classList.remove('activer');
            document.getElementById('updateIdLanches').classList.remove('activer');
        }
        if(changeLanches.value == 'delete/idLanches') {
            document.getElementById('getLanches').classList.remove('activer');
            document.getElementById('createLanches').classList.remove('activer');
            document.getElementById('getIdLanches').classList.remove('activer');
            document.getElementById('deleteIdLanches').classList.add('activer');
            document.getElementById('updateIdLanches').classList.remove('activer');
        }
        if(changeLanches.value == 'update/idLanches') {
            document.getElementById('getLanches').classList.remove('activer');
            document.getElementById('createLanches').classList.remove('activer');
            document.getElementById('getIdLanches').classList.remove('activer');
            document.getElementById('deleteIdLanches').classList.remove('activer');
            document.getElementById('updateIdLanches').classList.add('activer');
        }
    })

    const changeFilmes = document.querySelector('.reqFilmes')
    changeFilmes.addEventListener('change', () => {
        if(changeFilmes.value == 'buscarFilmes') {
            document.getElementById('getFilmes').classList.add('activer');
            document.getElementById('createFilmes').classList.remove('activer');
            document.getElementById('getIdFilmes').classList.remove('activer');
            document.getElementById('deleteIdFilmes').classList.remove('activer');
            document.getElementById('updateIdFilmes').classList.remove('activer');
        }
        if(changeFilmes.value == 'criarFilmes') {
            document.getElementById('getFilmes').classList.remove('activer');
            document.getElementById('createFilmes').classList.add('activer');
            document.getElementById('getIdFilmes').classList.remove('activer');
            document.getElementById('deleteIdFilmes').classList.remove('activer');
            document.getElementById('updateIdFilmes').classList.remove('activer');
        }
        if(changeFilmes.value == 'buscar/idFilmes') {
            document.getElementById('getFilmes').classList.remove('activer');
            document.getElementById('createFilmes').classList.remove('activer');
            document.getElementById('getIdFilmes').classList.add('activer');
            document.getElementById('deleteIdFilmes').classList.remove('activer');
            document.getElementById('updateIdFilmes').classList.remove('activer');
        }
        if(changeFilmes.value == 'delete/idFilmes') {
            document.getElementById('getFilmes').classList.remove('activer');
            document.getElementById('createFilmes').classList.remove('activer');
            document.getElementById('getIdFilmes').classList.remove('activer');
            document.getElementById('deleteIdFilmes').classList.add('activer');
            document.getElementById('updateIdFilmes').classList.remove('activer');
        }
        if(changeFilmes.value == 'update/idFilmes') {
            document.getElementById('getFilmes').classList.remove('activer');
            document.getElementById('createFilmes').classList.remove('activer');
            document.getElementById('getIdFilmes').classList.remove('activer');
            document.getElementById('deleteIdFilmes').classList.remove('activer');
            document.getElementById('updateIdFilmes').classList.add('activer');
        }
    })

    const changeFuncionarios = document.querySelector('.reqFuncionarios')
    changeFuncionarios.addEventListener('change', () => {
        if(changeFuncionarios.value == 'buscarFuncionarios') {
            document.getElementById('getFuncionarios').classList.add('activer');
            document.getElementById('createFuncionarios').classList.remove('activer');
            document.getElementById('getIdFuncionarios').classList.remove('activer');
            document.getElementById('deleteIdFuncionarios').classList.remove('activer');
            document.getElementById('updateIdFuncionarios').classList.remove('activer');
        }
        if(changeFuncionarios.value == 'criarFuncionarios') {
            document.getElementById('getFuncionarios').classList.remove('activer');
            document.getElementById('createFuncionarios').classList.add('activer');
            document.getElementById('getIdFuncionarios').classList.remove('activer');
            document.getElementById('deleteIdFuncionarios').classList.remove('activer');
            document.getElementById('updateIdFuncionarios').classList.remove('activer');
        }
        if(changeFuncionarios.value == 'buscar/idFuncionarios') {
            document.getElementById('getFuncionarios').classList.remove('activer');
            document.getElementById('createFuncionarios').classList.remove('activer');
            document.getElementById('getIdFuncionarios').classList.add('activer');
            document.getElementById('deleteIdFuncionarios').classList.remove('activer');
            document.getElementById('updateIdFuncionarios').classList.remove('activer');
        }
        if(changeFuncionarios.value == 'delete/idFuncionarios') {
            document.getElementById('getFuncionarios').classList.remove('activer');
            document.getElementById('createFuncionarios').classList.remove('activer');
            document.getElementById('getIdFuncionarios').classList.remove('activer');
            document.getElementById('deleteIdFuncionarios').classList.add('activer');
            document.getElementById('updateIdFuncionarios').classList.remove('activer');
        }
        if(changeFuncionarios.value == 'update/idFuncionarios') {
            document.getElementById('getFuncionarios').classList.remove('activer');
            document.getElementById('createFuncionarios').classList.remove('activer');
            document.getElementById('getIdFuncionarios').classList.remove('activer');
            document.getElementById('deleteIdFuncionarios').classList.remove('activer');
            document.getElementById('updateIdFuncionarios').classList.add('activer');
        }
    })
