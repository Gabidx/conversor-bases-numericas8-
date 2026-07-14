// Função responsável por converter um número entre diferentes bases numéricas.
function converterBase() {
            
            const numeroStr = document.getElementById('numeroInput').value.trim();
            const baseOrigem = parseInt(document.getElementById('baseOrigem').value);
            const baseDestino = parseInt(document.getElementById('baseDestino').value);
            const resultadoDiv = document.getElementById('resultado');

            
            if (numeroStr === "") {
                resultadoDiv.innerText = "Por favor, digite um número válido.";
                resultadoDiv.style.color = "red";
                return;
            }

            
            const numeroDecimal = parseInt(numeroStr, baseOrigem);

            
            if (isNaN(numeroDecimal)) {
                resultadoDiv.innerText = "Erro: O número digitado não pertence à base de origem selecionada.";
                resultadoDiv.style.color = "red";
                return;
            }

            
            let resultadoFinal = numeroDecimal.toString(baseDestino).toUpperCase();

            
            resultadoDiv.innerText = "Resultado: " + resultadoFinal;
            resultadoDiv.style.color = "#0056b3"; 
        }

        function limparCampos() {
            document.getElementById('numeroInput').value = "";
            document.getElementById('resultado').innerText = "Resultado: ";
            document.getElementById('resultado').style.color = "#0056b3";
            document.getElementById('numeroInput').focus();
            }