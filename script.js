document.addEventListener("DOMContentLoaded", function () {
    const originSelect = document.getElementById("origin");
    const destinationSelect = document.getElementById("destination");
    const sendPacketButton = document.getElementById("sendPacket");

    const devices = document.querySelectorAll(".device");
    const router = document.getElementById("router");
    const packet = document.getElementById("packet1");

    let isPacketMoving = false;

    sendPacketButton.addEventListener("click", function () {
        if (!isPacketMoving) {
            const origin = document.getElementById(originSelect.value);
            const destination = document.getElementById(destinationSelect.value);

            const originRect = origin.getBoundingClientRect();
            const destinationRect = destination.getBoundingClientRect();

            packet.style.top = `${originRect.top + originRect.height / 2}px`;
            packet.style.left = `${originRect.left + originRect.width / 2}px`;

            packet.style.display = "block";
            isPacketMoving = true;

            setTimeout(function () {
                packet.style.top = `${destinationRect.top + destinationRect.height / 2}px`;
                packet.style.left = `${destinationRect.left + destinationRect.width / 2}px`;

                setTimeout(function () {
                    packet.style.display = "none";
                    isPacketMoving = false;
                }, 500);
            }, 500);
        }
    });
    
    const addDeviceForm = document.getElementById("addDeviceForm");
    const deviceNameInput = document.getElementById("deviceName");
    const deviceIPInput = document.getElementById("deviceIP");

    const addRouterForm = document.getElementById("addRouterForm");
    const routerNameInput = document.getElementById("routerName");
    const routerIPInput = document.getElementById("routerIP");

    const addServerForm = document.getElementById("addServerForm");
    const serverNameInput = document.getElementById("serverName");
    const serverIPInput = document.getElementById("serverIP");

    addDeviceForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const deviceName = deviceNameInput.value;
        const deviceIP = deviceIPInput.value;

        if (deviceName && deviceIP) {
            // Cria um novo dispositivo e adiciona à rede
            const newDevice = document.createElement("div");
            newDevice.className = "device";
            newDevice.textContent = deviceName;
            newDevice.id = `device${devices.length + 1}`;
            document.getElementById("network").appendChild(newDevice);

            // Adiciona o dispositivo ao seletor de origem e destino
            const option = document.createElement("option");
            option.value = `device${devices.length + 1}`;
            option.textContent = deviceName;
            originSelect.appendChild(option);
            destinationSelect.appendChild(option.cloneNode(true));

            // Limpa os campos do formulário
            deviceNameInput.value = "";
            deviceIPInput.value = "";

            // Atualiza o array de dispositivos
            devices.push(newDevice);
        }
    });

    addRouterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const routerName = routerNameInput.value;
        const routerIP = routerIPInput.value;

        if (routerName && routerIP) {
            // Cria um novo roteador e adiciona à rede
            const newRouter = document.createElement("div");
            newRouter.className = "router";
            newRouter.textContent = routerName;
            newRouter.id = `router${roteadores.length + 1}`;
            document.getElementById("network").appendChild(newRouter);

            // Limpa os campos do formulário
            routerNameInput.value = "";
            routerIPInput.value = "";

            // Atualiza o array de roteadores
            roteadores.push(newRouter);
        }
    });

    addServerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const serverName = serverNameInput.value;
        const serverIP = serverIPInput.value;

        if (serverName && serverIP) {
            // Cria um novo servidor e adiciona à rede
            const newServer = document.createElement("div");
            newServer.className = "server";
            newServer.textContent = serverName;
            newServer.id = `server${servidores.length + 1}`;
            document.getElementById("network").appendChild(newServer);

            // Limpa os campos do formulário
            serverNameInput.value = "";
            serverIPInput.value = "";

            // Atualiza o array de servidores
            servidores.push(newServer);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const originSelect = document.getElementById("origin");
    const destinationSelect = document.getElementById("destination");
    const sendPacketButton = document.getElementById("sendPacket");

    const devices = document.querySelectorAll(".device");
    const routers = document.querySelectorAll(".router");
    const servers = document.querySelectorAll(".server");
    const packet = document.getElementById("packet1");

    let isPacketMoving = false;

    // Estrutura para rastrear as mensagens
    const messages = [];

    sendPacketButton.addEventListener("click", function () {
        if (!isPacketMoving) {
            const origin = document.getElementById(originSelect.value);
            const destination = document.getElementById(destinationSelect.value);

            const originRect = origin.getBoundingClientRect();
            const destinationRect = destination.getBoundingClientRect();

            packet.style.top = `${originRect.top + originRect.height / 2}px`;
            packet.style.left = `${originRect.left + originRect.width / 2}px`;

            packet.style.display = "block";
            isPacketMoving = true;

            setTimeout(function () {
                packet.style.top = `${destinationRect.top + destinationRect.height / 2}px`;
                packet.style.left = `${destinationRect.left + destinationRect.width / 2}px`;

                // Adicione a mensagem à estrutura
                const message = `${origin.textContent} -> ${destination.textContent}`;
                messages.push(message);

                // Atualize a lista de mensagens na página
                const messageList = document.getElementById("messageList");
                const messageItem = document.createElement("li");
                messageItem.textContent = message;
                messageList.appendChild(messageItem);

                setTimeout(function () {
                    packet.style.display = "none";
                    isPacketMoving = false;
                }, 500);
            }, 500);
        }
    });

    // Resto do código para adicionar dispositivos, roteadores e servidores...
});












