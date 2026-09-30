const queue = [];
const PickAService = document.getElementById('Service');
const queueNumber = document.getElementById('queue-number');
const queueList = document.getElementById('queue');
const isAtService = document.getElementById('is-at-service');
const callNextButton = document.getElementById('call-Next');
const takeServiceButton = document.getElementById('take');
let number = 1;

const prefixes = {
    Repair: 'Р',
    Warranty: 'Г',
    Consult: 'К',
};

const renderQueue = () => {
    queueNumber.textContent = queue.length;
    queueList.innerHTML = queue
        .map((ticket) => {
            const cls = ticket.service === 'Warranty' ? ' class="priority"' : '';
            return `<li${cls}>${ticket.label}</li>`;
        })
        .join('');
};

const takeService = () => {
    const service = PickAService.value;
    const prefix = prefixes[service];
    if (prefix) {
        queue.push({
            label: `${prefix}-${String(number).padStart(3, '0')}`,
            service,
        });
        number++;
        renderQueue();
    }
};

takeServiceButton.addEventListener('click', takeService);

const callNext = () => {
    if (queue.length) {
        const ticket = queue.shift();
        isAtService.textContent = `Зараз обслуговується: ${ticket.label}`;
        isAtService.classList.toggle('Warrant', ticket.service === 'Warranty');
        renderQueue();
    }
};

callNextButton.addEventListener('click', callNext);