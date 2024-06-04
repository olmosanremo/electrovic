// import React from 'react';

// export default function App() {

//     return(
//         <h1>Am I Evil?</h1>
//     )
// }

import React, {useEffect} from "react";
import * as Tone from 'tone';

function App() {

useEffect(() => {
    const synth = new Tone.Synth().toDestination();

    const now = Tone.now();

    synth.triggerAttackRelease("C4","8n",now);
    synth.triggerAttackRelease("E4","19n",now+0.5);
    synth.triggerAttackRelease("G4","8n",now+1);
},

[]);

return(
   <div className="App">
    <h1>Hello, tone.js</h1>
   </div>
);

}

export default App;