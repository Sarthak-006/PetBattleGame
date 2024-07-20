import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import PetBattleGameABI from './PetBattleGame.json'; // Updated path

const App = () => {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [petName, setPetName] = useState('');
    const [opponent, setOpponent] = useState('');
    const [petStats, setPetStats] = useState({});
    const [playerStats, setPlayerStats] = useState({ wins: 0, losses: 0 });

    useEffect(() => {
        const init = async () => {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);

            const networkId = await web3.eth.net.getId();
            const deployedNetwork = PetBattleGameABI.networks[networkId];

            console.log("Accounts:", accounts);
            console.log("Network ID:", networkId);
            console.log("Deployed Network:", deployedNetwork);

            if (deployedNetwork) {
                const instance = new web3.eth.Contract(
                    PetBattleGameABI.abi,
                    deployedNetwork.address,
                );
                setContract(instance);
            } else {
                console.error("Smart contract not deployed on the detected network.");
                alert("Smart contract not deployed on the detected network.");
            }
        };
        init();
    }, []);

    const createPet = async () => {
        await contract.methods.createPet(petName).send({ from: account });
        alert('Pet created!');
    };

    const battle = async () => {
        await contract.methods.battle(opponent).send({ from: account });
        alert('Battle initiated!');
    };

    const getPetStats = async () => {
        const stats = await contract.methods.getPetStats().call({ from: account });
        setPetStats({
            name: stats[0],
            level: stats[1],
            attackPower: stats[2],
            defensePower: stats[3],
        });
    };

    const getPlayerStats = async () => {
        const stats = await contract.methods.getPlayerStats(account).call();
        setPlayerStats({ wins: stats[0], losses: stats[1] });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pet Battle Game</h1>
                <h2>Your Account: {account}</h2>

                <div>
                    <h3>Create a Pet</h3>
                    <input
                        type="text"
                        placeholder="Pet Name"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                    <button onClick={createPet}>Create Pet</button>
                </div>

                <div>
                    <h3>Battle</h3>
                    <input
                        type="text"
                        placeholder="Opponent Address"
                        value={opponent}
                        onChange={(e) => setOpponent(e.target.value)}
                    />
                    <button onClick={battle}>Battle</button>
                </div>

                <div>
                    <h3>Get Pet Stats</h3>
                    <button onClick={getPetStats}>Fetch Stats</button>
                    {petStats.name && (
                        <div>
                            <p>Name: {petStats.name}</p>
                            <p>Level: {petStats.level}</p>
                            <p>Attack Power: {petStats.attackPower}</p>
                            <p>Defense Power: {petStats.defensePower}</p>
                        </div>
                    )}
                </div>

                <div>
                    <h3>Get Player Stats</h3>
                    <button onClick={getPlayerStats}>Fetch Stats</button>
                    <p>Wins: {playerStats.wins}</p>
                    <p>Losses: {playerStats.losses}</p>
                </div>
            </header>
        </div>
    );
};

export default App;