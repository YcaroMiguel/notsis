const alunos = [
    "Aimê Laís", "Alanna Gabrielly", "Alice Feitosa", "Ana Clara", "Ana Sophia",
    "André Lucas", "Ashira Giovanna", "Bruna Vitória", "Cesar Miguel", "Elias Maia",
    "Emanuelly Ester", "Felipe de Melo", "Gabriel Pinheiro", "Gustavo Luiz", "Hiel Alves", "Isabelly Lins",
    "João Lucas", "Júlio Cezar", "Kaira Vitória", "Luiz Gabriel", "Lyvia Emanuelly",
    "Maria Alice", "Maria Eduarda", "Marya Luiza", "Matheus Vitor", "Pedro Henrique",
    "Rebecca Silva", "Samuel Asafe", "Sury de França", "Thais Lopez", "Ycaro Miguel"
  ];
  
  const selectAluno = document.getElementById('aluno');
  
  alunos.sort().forEach(nome => {
    const option = document.createElement('option');
    option.value = nome;
    option.textContent = nome;
    selectAluno.appendChild(option);
  });
  
