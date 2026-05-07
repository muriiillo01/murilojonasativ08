usuarios(
  id INTEGER PRIMARY KEY,
  nome TEXT,
  idade INTEGER
)await db.run(
  "INSERT INTO usuarios (nome, idade) VALUES (?, ?)",
  ["Maria", 25]
);const usuarios = await db.all("SELECT * FROM usuarios");
console.log(usuarios);