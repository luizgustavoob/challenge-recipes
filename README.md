# Challenge Recipes

Esse repositório contém uma proposta de API para receber ingredientes como parâmetros em uma chamada GET e retornar uma lista de receitas. Essas receitas são geradas a partir de consultas em APIs de terceiros ([RecipePuppy](http://www.recipepuppy.com/about/api/) e [Giphy](https://developers.giphy.com/docs/)).

## Tecnologias

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [Axios](https://github.com/axios/axios)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Docker](https://www.docker.com/)

## Instalação

Para o correto funcionamento da aplicação, o único pré-requisito é ter o [Docker](https://www.docker.com/) instalado. Tendo ele, você deverá baixar esse repositório localmente e acessá-lo através do seu terminal. Feito isso, você deverá executar o comando
```
docker build -t challenge-recipes .
```
para que a imagem da aplicação seja gerada. Esse processo tende a não ser demorado, e durante a construção da imagem, serão exibidos alguns logs para que o usuário acompanhe a evolução do processo.
Com a imagem pronta, você precisará executar
```
docker run --name challenge-recipes -p 3333:3333 -d challenge-recipes
```
para que a API fique disponível para consumo.

## Execução

Em seu navegador, ou no client de APIs REST de sua preferência, realize a seguinte chamada:
```
http://localhost:3333/recipes/?i={ingredient_1},{ingredient_2},{ingredient_3}
```
sendo que os ingredientes deverão ser substituídos pelos texto de prefência do usuário (ex: onions, tomato, garlic, etc). Como resposta, você deverá receber um JSON semelhante a estrutura a seguir:
```
{
	"keywords": ["onions","garlic"],
	"recipes": [{
			"title": "Roasted Garlic Grilling Sauce",
			"ingredients": ["garlic", "hot sauce", "onions"],
			"link": "http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx",
			"gif": "https://media3.giphy.com/media/c11ISnPiRdis8/giphy.gif"
		},
		{
			"title": "Steamed Mussels I",
			"ingredients": ["garlic", "mussels", "onions"],
			"link": "http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx",
			"gif": "https://media2.giphy.com/media/54JLdulN5BOwM/giphy.gif"
		}
	]
}
```

Caso a requisição contenha algum erro, como por exemplo, o fato de não enviar os ingredientes ou enviar muitos deles (o limite é 3), será retornado um erro para o usuário.
