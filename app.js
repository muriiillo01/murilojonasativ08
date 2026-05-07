import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function iniciarBanco() {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database
    });

    await db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER
        )
    `);

    await db.run(
        "INSERT INTO usuarios (nome, idade) VALUES (?, ?)",
        ["Maria", 25]
    );

    const usuarios = await db.all("SELECT * FROM usuarios");
    
    console.log("✅ Execução concluída! Dados no banco:");
    console.log(usuarios);
}

iniciarBanco();
