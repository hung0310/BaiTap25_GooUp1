async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        console.log(data);
        const cardContainer = document.getElementById('cardContainer');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card', 'border', 'border-gray-300', 'rounded-lg');
    
            const cardContent = document.createElement('div');
            cardContent.classList.add('flex', 'flex-col', 'p-3', 'gap-5');
    
            const title = document.createElement('span');
            title.classList.add('text-xl', 'font-medium');
            title.textContent = item.title;
    
            const image = document.createElement('img');
            image.classList.add('w-full', 'rounded-lg');
            image.src = item.imageURL;
            image.alt = '';
    
            const funfact = document.createElement('p');
            funfact.classList.add('text-gray-500', 'text-lg');
            funfact.textContent = item.funfact;
    
            cardContent.appendChild(title);
            cardContent.appendChild(image);
            cardContent.appendChild(funfact);
    
            card.appendChild(cardContent);
            cardContainer.append(card);
        });
         
        data.forEach(item => {
            if (typeof item.title !== 'string' || typeof item.imageURL !== 'string' || typeof item.funfact !== 'string') {
                throw new Error('JSON data does not match expected structure');
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        alert("Finally");
    }
}

fetchData();