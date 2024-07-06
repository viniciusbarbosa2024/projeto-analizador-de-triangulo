let l = []
let res = document.getElementById('res')
        
        function analisador() {
            for(let c=1;c<=3;c++) {
                l[c] = Number(document.getElementById(`lado${c}`).value)
            } 

            let existência = verificarexistência(l[1],l[2],l[3])

            if (existência == 'não existe') {
                window.alert('Esses valores não podem formar um triângulo')
            } else {
                //Cálculo dos ângulos via lei dos cossenos
                
                let angA = (180*Math.acos((l[1]**2 + l[3]**2 - l[2]**2)/(2*l[1]*l[3])))/Math.PI //lei dos cossenos + conversão de cosseno para ângulo + conversão para graus
                
                let angB = (180*Math.acos((l[1]**2 + l[2]**2 - l[3]**2)/(2*l[1]*l[2])))/Math.PI

                let angC = (180*Math.acos((l[3]**2 + l[2]**2 - l[1]**2)/(2*l[3]*l[2])))/Math.PI

                // Cálculo do perímetro

                let perímetro = l[1] + l[2] + l[3]

                //Cálculo da área

                let área = l[1]*l[3]*(Math.sin(angA*(Math.PI)/180))/2

                //Criação dos parágrafos que exibirão os resultados

                for(let c = 1;c<=5;c++) {
                    let p = document.createElement('p')
                    if (c<=3) {
                        p.setAttribute('class','angulo') 
                    } else if (c == 4) {
                        p.setAttribute('id','perimetro')
                    } else {
                        p.setAttribute('id','area')
                    }
                    
                    res.appendChild(p)
                }

                //Resultado dos ângulos

                resultadoAngulo = document.getElementsByClassName('angulo')

                resultadoAngulo[0].innerHTML = `Ângulo do vértice A: ${angA}°`
                resultadoAngulo[1].innerHTML = `Ângulo do vértice B: ${angB}°`
                resultadoAngulo[2].innerHTML = `Ângulo do vértice C: ${angC}°`

                //Resultado do perímetro

                resultadoPerímetro = document.getElementById('perimetro')

                resultadoPerímetro.innerHTML = `Perímetro: ${perímetro}`

                //Resultado da área

                resultadoÁrea = document.getElementById('area')

                resultadoÁrea.innerHTML = `Área: ${área}`

                
            }
        }
        
        function verificarexistência(x,y,z) {
            if (x>= y+z || y>= x+z || z>= x+y) {
                return ('não existe')
            } else {
                return ('existe')
            }

        }

        /* 
            Para um projeto completo ainda faltaria diversas coisas,como:

            . Validações dos inputs
            . Personalização do caso "triângulo não existe"
            . Limpeza dos inputs pós análise dos valores

            e etc.

            Tais pontos não foram explorados por fugirem do intuito principal do projeto que é a prática do uso do objeto Math
        */