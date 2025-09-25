nome = input("nome")
organizacao = input("ta organizada??")
livroEmprestado = True

class Bibliotecario():
    
    def __init__(self):
        self.nome = ""
        self.id = ""

    def organizar ():
        if organizacao == "sim":
            print ("biblioteca organizada")
        else:
            print("ta uma bagunça aqui")



class Usuarios ():
    def __init__(self):
        self.nome = nome
        self.idDeUsuario = id
        self.emprestimos = livroEmprestado


class Livros():

    def __init__(self):
        self.nome = ""
        self.quantidade = ""
    
    def SituacaoDoLivro():
        
        if livroEmprestado ==True:
            print ("o livro ta emprestado")
        else:
            print("esse livro esta livre para emprestimo")



class Prateleiras(Livros):
    
    def __init__(self,material):
        self.material = "madeira"
        self.quantidade = ""





class biblioteca( Bibliotecario,Livros,Prateleiras, Usuarios):
    def __init__(self):
        self.Bibliotecario=Bibliotecario
        self.Livros = Livros
        self.Prateleiras = Prateleiras    
        self.aberto = True
        self.fechado = False
