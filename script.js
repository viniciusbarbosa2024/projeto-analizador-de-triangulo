let l = []
        
        function analizador() {
            for(let c=1;c<=3;c++) {
                l[c] = Number(document.getElementById(`lado${c}`).value)
            } 

            let existência = verificarexistência(l[1],l[2],l[3])

            if (existência == 'não existe') {
                window.alert('Esses valores não podem formar um triângulo')
            } else {
                let angA = (180*Math.acos((l[1]**2 + l[3]**2 - l[2]**2)/(2*l[1]*l[3])))/Math.PI //lei dos cossenos + conversão de cosseno para ângulo + conversão para graus
                
                let angB = (180*Math.acos((l[1]**2 + l[2]**2 - l[3]**2)/(2*l[1]*l[2])))/Math.PI

                let angC = (180*Math.acos((l[3]**2 + l[2]**2 - l[1]**2)/(2*l[3]*l[2])))/Math.PI

            }
        }
        
        function verificarexistência(x,y,z) {
            if (x>= y+z || y>= x+z || z>= x+y) {
                return ('não existe')
            } else {
                return ('existe')
            }

        }