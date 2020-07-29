import React, {useState} from "react";
import "./App.css";
import {PlayGround} from "../components/playGround/PlayGround";
import {Block} from "../components/block/Block";

export default function App() {

    const giveBlockToSetBlocks = () => {
        const arr = [];
        const ring = Math.floor(Math.random() * 36);
        for (let i = 0; i < 36; i++) {

            if (i === ring) {
                arr.push({
                    nameClass: "block",
                    val: "0"
                })
            } else {
                arr.push({
                    nameClass: "block",
                    val: "-"
                })
            }
        }
        return arr;
    }
    const [blocks, setBlocks] = useState(giveBlockToSetBlocks())
    const [tries, setTries] = useState(0)
    const change = (e) => {
        let arr = [...blocks];
        arr[e].nameClass = "blockclicked"
        setBlocks(arr)

    }
    return (
        <div className="App">
            <PlayGround arr={blocks.map((data, index) => {
                    return (<Block val={blocks[index].val} nameClass={blocks[index].nameClass} lick={() => {
                        if (blocks[index].nameClass==="blockclicked") {
                            setTries(tries)
                        }else {
                            setTries(tries+1)
                        }
                        change(index);
                    }
                    } key={index}/>)
                }
            )}/>
            <p>Tries: {tries}</p>
            <button
                onClick={() => {
                    window.location.reload(false);
                }}
            >
                reset
            </button>
        </div>
    );
}
