// Sample data: An array of topics for demonstration
const topics = [
    'Sorting Algorithms',
    'Search Algorithms',
    'Dynamic Programming',
    'Data Structures',
    'Web Development',
    'Machine Learning',
    'Game Development',
    'Python Programming',
    'Java Programming',
    'JavaScript Programming',
    'C++ Programming',
];

// Function to filter and display search results
function searchFunction() {
    // Get the search input value
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    
    // Filter the topics based on the search input
    const filteredTopics = topics.filter(topic => topic.toLowerCase().includes(searchInput));
    
    // Display the results
    displayResults(filteredTopics);
}

// Function to display the filtered results
function displayResults(results) {
    // Clear previous results
    const mainSection = document.querySelector('main');
    const resultContainer = document.getElementById('result-container') || document.createElement('div');
    
    resultContainer.id = 'result-container';
    resultContainer.innerHTML = ''; // Clear previous results

    // Create a message if there are no results
    if (results.length === 0) {
        resultContainer.innerHTML = '<p>No topics found.</p>';
    } else {
        // Create a list to display results
        const resultList = document.createElement('ul');
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });
        resultContainer.appendChild(resultList);
    }

    // Append the result container to main section
    mainSection.appendChild(resultContainer);
}
