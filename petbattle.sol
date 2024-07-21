// SPDX-License-Identifier: MIT
pragma solidity >=0.8.13 <0.9.0;

import "fhevm/lib/TFHE.sol";
import "hardhat/console.sol";

contract PetBattleGame {
    struct Pet {
        string name;
        uint8 level;
        uint8 attackPower;
        uint8 defensePower;
    }

    mapping(address => Pet) public pets;
    mapping(address => uint256) public playerWins;
    mapping(address => uint256) public playerLosses;

    event PetCreated(address owner, string name);
    event BattleResult(address winner, address loser);

    modifier hasPet() {
        require(bytes(pets[msg.sender].name).length > 0, "You must have a pet to battle");
        _;
    }

    function createPet(string calldata name) public {
        require(bytes(name).length > 0, "Pet name cannot be empty");
        pets[msg.sender] = Pet(name, 1, 10, 5); // Default values for level, attack, and defense
        emit PetCreated(msg.sender, name);
    }

    function battle(address opponent) public hasPet {
        require(opponent != msg.sender, "You cannot battle yourself");
        require(bytes(pets[opponent].name).length > 0, "Opponent must have a pet");

        Pet storage myPet = pets[msg.sender];
        Pet storage opponentPet = pets[opponent];

        // Simple battle logic
        uint8 myDamage = myPet.attackPower > opponentPet.defensePower ? myPet.attackPower - opponentPet.defensePower : 0;
        uint8 opponentDamage = opponentPet.attackPower > myPet.defensePower ? opponentPet.attackPower - myPet.defensePower : 0;

        if (myDamage > opponentDamage) {
            playerWins[msg.sender]++;
            playerLosses[opponent]++;
            emit BattleResult(msg.sender, opponent);
        } else if (opponentDamage > myDamage) {
            playerWins[opponent]++;
            playerLosses[msg.sender]++;
            emit BattleResult(opponent, msg.sender);
        } else {
            // Draw logic (optional)
            emit BattleResult(address(0), address(0)); // No winner
        }
    }

    function getPetStats() public view hasPet returns (string memory, uint8, uint8, uint8) {
        Pet storage myPet = pets[msg.sender];
        return (myPet.name, myPet.level, myPet.attackPower, myPet.defensePower);
    }

    function getPlayerStats(address player) public view returns (uint256 wins, uint256 losses) {
        return (playerWins[player], playerLosses[player]);
    }
}
