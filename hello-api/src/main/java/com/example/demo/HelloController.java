//Define o pacote onde a classe está localizada
package com.example.demo;

//Importa as anotações necessárias do Spring Boot
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//Indica que esta classe é um Controller que responde a requisições HTTP
@RestController
@RequestMapping("/api") //Define que todos os endpoints dentro desta classe terão o prefixo "/api"

public class HelloController {
	
	//Cria um endpoint que responde a requisições GET no caminho "/api/hello"
	@GetMapping("/hello")
	public String sayHello() {
		//Retorna a mensagem "Hello, World" quando este endpoint for acessado
		return "Hello, World";
	}
	
	//Cria um endpoint GET que recebe um nome como parametro na URL
	@GetMapping("bemvindo/{nome}")
	public String bemVindo(@PathVariable String nome) {//Captura o nome digitado na URL
		
		//Retorna a mensagem "Bem Vindo, " junto ao nome passado na URL
		return "Bem Vindo, " + nome + "!!";
		
		//Endereço para testar no navegador: http://localhost:8080/api/bemvindo/Yasmin
	}
	
	//Cria um endpoint GET que recebe 2 números como parametro na URL e mostra a soma deles
	@GetMapping("somar/{num1}/{num2}")
	public String Somar(@PathVariable String num1, @PathVariable String num2) {//Captura os números digitados na URL
		
		//Converte os parametros em números
		int i_num1 = Integer.parseInt(num1);
		int i_num2 = Integer.parseInt(num2);
		
		//Soma os números
		int sum = i_num1 + i_num2;
		
		//Retorna a mensagem com os números passados na URL + a sua soma
		return "O resultado da soma de " + num1 + " + " + num2 + " é " + sum;
		
		//Endereço para testar no navegador: http://localhost:8080/api/somar/10/5
	}

}
