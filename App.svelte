<script>
	let x = 0,
	  res = "",
	  statement = "",
	  y = 0,
	  r = "Make your move";
	const s = ["Paper beats Rock ", "Rock breaks Scissor ", "Scissor cuts Paper "];
	const re = ["You won!", "You lost!", "It's a tie"];
	const mym = [
	  "Make your move",
	  "Computer has chosen Scissor",
	  "Computer has chosen Paper",
	  "Computer has chosen Rock"
	];
	const choice = ["rock", "paper", "scissor"];
	function random() {
	  return choice[Math.floor(Math.random() * 3)];
	}
	function ch(c) {
	  let ran = random();
	  console.log(c, ran);
	  if (ran == c) {
	    statement = "";
	    r = "Computer has chosen the samething";
	    res = re[2];
	  }
	  if (ran == "paper" && c == "scissor") {
	    x += 1;
	    statement = s[2];
	    res = re[0];
	    r = mym[2];
	  }
	  if (c == "paper" && ran == "scissor") {
	    y += 1;
	    statement = s[2];
	    res = re[1];
	    r = mym[1];
	  }
	  if (ran == "paper" && c == "rock") {
	    y += 1;
	    statement = s[0];
	    res = re[1];
	    r = mym[2];
	  }
	  if (ran == "rock" && c == "paper") {
	    x += 1;
	    statement = s[0];
	    res = re[0];
	    r = mym[3];
	  }
	  if (ran == "scissor" && c == "rock") {
	    x += 1;
	    statement = s[1];
	    res = re[0];
	    r = mym[1];
	  }
	  if (c == "scissor" && ran == "rock") {
	    y += 1;
	    statement = s[1];
	    res = re[1];
	    r = mym[3];
	  }
	}
	function reset() {
	  x = 0;
	  y = 0;
	  statement = "";
	  res = "";
	  r = "Make your move matey!";
	}
</script>

<h2 id='head'>Rock Paper Scissors</h2>
<div><section id='score'>
<h3 id='a'>user</h3>
<h1 id='sc'>{x}:{y}</h1>
<h3 id='b'>comp</h3>
</section><section id='res'>
	<h2>{statement} {res}</h2>
</section><section id='choose'>
<button on:click={()=>ch('rock')}><img alt='' src="https://img.icons8.com/color/96/000000/hand-rock.png"/></button>
<button on:click={()=>ch('paper')}><img alt='' src="https://img.icons8.com/color/96/000000/hand.png"/></button>
<button on:click={()=>ch('scissor')}><img alt='' src="https://img.icons8.com/color/96/000000/hand-scissors.png"/></button>
</section><section id='mov'>
	<h3>{r}</h3>
	<button id='reset' on:click={()=>reset()}> Reset </button>
</section></div>

<style>
	h2 {
	  text-align: center;
	}
	div {
	  font-family: asap, sans-serif;
	  width: 100vw;
	  height: 200vh;
	  background-color: rgb(0, 0, 25);
	  color: white;
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	}
	#sc {
	  font-size: 5rem;
	}
	#score {
	  margin-top: 30px;
	  height: 100px;
	  width: 200px;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  border: 2px solid white;
	}
	#a {
	  margin-top: 30px;
	  align-self: start;
	  margin-left: -30px;
	  background-color: #e25840;
	  padding: 5px;
	}
	#b {
	  margin-top: 30px;
	  align-self: end;
	  margin-right: -30px;
	  background-color: #e25840;
	  padding: 5px;
	}
	#res {
	  width: 200px;
	  margin-top: 15px;
	}
	button {
	  margin-right: 10px;
	  background-color: transparent;
	  border: 2px solid white;
	  border-radius: 50%;
	}
	#mov {
	  text-align: center;
	  display: flex;
	  flex-direction: column;

	  margin-top: 15px;
	}
	#head {
	  font-size: 2rem;
	}
	#reset {
	  border-radius: 0%;
	  color: white;
	  padding: 10px;
	}
</style>