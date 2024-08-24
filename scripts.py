import random

def rolar_dado():
    while True:
        try:
            lados = int(input("Digite o número de lados do dado (mínimo 2): "))
            if lados < 2:
                print("O número de lados deve ser pelo menos 2.")
            else:
                break
        except ValueError:
            print("Por favor, digite um número inteiro válido.")

    resultado = random.randint(1, lados)
    print(f"Resultado: {resultado}")

# Chama a função para iniciar o programa
rolar_dado()
