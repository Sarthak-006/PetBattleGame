 
# Pet Battle Game

## Overview
Welcome to **Pet Battle Game**, a decentralized application that merges the excitement of pet battles with the power of blockchain technology! Built on the Ethereum network using **Web3.js** and **Solidity**, this game allows players to create, battle, and manage their unique pets in a secure and transparent environment. 

### Inco Network Challenge
We are thrilled to participate in the **Inco Network** hackathon, leveraging cutting-edge **FHE (Fully Homomorphic Encryption)** technology to deploy confidential smart contracts with our **fhEVM (FHE + EVM)**. Our goal is to create a unique application that not only entertains but also addresses real-world challenges in confidentiality and security.

## Key Features
- **Create Your Pet**: Players can create their own pets with unique names and stats using the `createPet` function.
- **Engage in Battles**: Challenge other players by battling their pets using the `battle` function. The outcome is determined by your pet's stats, making strategy essential!
- **View Stats**: Keep track of your pet's performance and your overall player stats, including wins and losses, through the `getPetStats` and `getPlayerStats` functions.
- **Blockchain Security**: All transactions and pet data are securely stored on the Ethereum blockchain, ensuring transparency and trust.

## Technology Stack
- **Frontend**: React.js, HTML, CSS
- **Backend**: Ethereum Smart Contracts (Solidity)
- **Blockchain Interaction**: Web3.js
- **Deployment**: GitHub Pages for easy access and sharing

## Live Demo
Check out the live demo of the Pet Battle Game [here](https://sarthak-006.github.io/PetBattleGame/).

## How It Works
1. **Create a Pet**: Use the `createPet(name)` function to create a new pet. Each pet has unique stats that influence battle outcomes.
2. **Battle**: Use the `battle(opponentAddress)` function to challenge another player’s pet.
3. **Fetch Stats**: Use `getPetStats()` to retrieve your pet's stats and `getPlayerStats(account)` to view your overall performance.

## How to Get Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Sarthak-006/PetBattleGame.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pet-battle-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to start battling!

## UI/UX Design
The application features a clean and user-friendly interface, designed to enhance user experience. For bonus points, we have incorporated brand colors and design elements that align with the theme of confidential blockchain.

## Use Cases
This project addresses several use cases, including:
- **Confidential Gaming**: Players can engage in battles without exposing sensitive data.
- **Identity Solutions**: Players maintain ownership of their pets securely on the blockchain.

## Resources
- [Documentation with example code](https://docs.inco.org/getting-started/example-dapps)
- [Inco Arcade for fully built applications](https://arcade.inco.org/)


## Why This Project?
In a world where digital ownership and transparency are paramount, **Pet Battle Game** leverages blockchain technology to create a fun and engaging experience. By participating in this hackathon, we aim to showcase the potential of decentralized applications in gaming while addressing the challenges of trust and security in online interactions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Join us in the battle and become the ultimate pet trainer while leveraging the power of Inco Network!
