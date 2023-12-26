AOS.init();

// Cria dataDoEvento com a data fixa do evento
const dataDoEvento = new Date("Apr 16, 2024 23:45:00");

// Cria timeStampDoEvento com a data do evento no formato TIME STAMP
const timeStampDoEvento = dataDoEvento.getTime();

// Retorna a diferença de tempo entre a hora atual e a hora do evento
const contaAsHoras = setInterval(function() {

    // Pega a hora atual
    const agora = new Date();

    // Pega a hora atual no formato TIME STAMP
    const timeStampAtual = agora.getTime();

    // Cria constantes referentes à valores de partes de tempo
    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60 
    const MinutoEmMs = 1000 * 60 
    const SegundoEmMs = 1000 

    // Calcula a distância de tempo até o evento
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // Conta o intervalo de tempo até o evento, dividido em partes de tempo
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const MinutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / MinutoEmMs);
    const SegundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / SegundoEmMs);

    // Coloca o resultado no formato HTML
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${MinutosAteOEvento}m ${SegundosAteOEvento}s`

    // Envia mensagem quando o evento já estiver expirado
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado em <strong>16/04/2024 23:45hs</strong>'
    }

// O 1000 abaixo se refere ao intervalo de vezes que a função contaAsHoras será executada
}, 1000);
