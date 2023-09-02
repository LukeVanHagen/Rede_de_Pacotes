import tkinter as tk

class Dispositivo:
    def __init__(self, nome, endereco_ip):
        self.nome = nome
        self.endereco_ip = endereco_ip

class Roteador(Dispositivo):
    def __init__(self, nome, endereco_ip):
        super().__init__(nome, endereco_ip)
        self.interfaces = []

class Pacote:
    def __init__(self, origem, destino, mensagem):
        self.origem = origem
        self.destino = destino
        self.mensagem = mensagem

class SimuladorRede:
    def __init__(self):
        self.dispositivos = []
        self.roteadores = []
        self.pacotes = []

    def adicionar_dispositivo(self, dispositivo):
        self.dispositivos.append(dispositivo)

    def adicionar_roteador(self, roteador):
        self.roteadores.append(roteador)

    def enviar_pacote(self, pacote):
        self.pacotes.append(pacote)

    def iniciar_interface_grafica(self):
        # Implemente a interface gráfica aqui usando Tkinter
        pass

if __name__ == "__main__":
    simulador = SimuladorRede()

    # Exemplo de criação de dispositivos
    dispositivo1 = Dispositivo("Dispositivo1", "192.168.1.1")
    dispositivo2 = Dispositivo("Dispositivo2", "192.168.1.2")
    roteador = Roteador("Roteador1", "192.168.1.254")
    roteador.interfaces.extend([dispositivo1, dispositivo2])

    # Adicione os dispositivos e roteadores ao simulador
    simulador.adicionar_dispositivo(dispositivo1)
    simulador.adicionar_dispositivo(dispositivo2)
    simulador.adicionar_roteador(roteador)

    # Exemplo de envio de pacotes
    pacote = Pacote(dispositivo1, dispositivo2, "Olá, dispositivo2!")
    simulador.enviar_pacote(pacote)

    # Inicie a interface gráfica
    simulador.iniciar_interface_grafica()
