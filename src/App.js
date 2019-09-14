import React from 'react';
import './App.css';

function App() {
  return ([
<div className="eevee">
  <div className="body">
    <div className="head">
      <div className="ears">
        <div className="ear">
          <div className="lobe"></div>
        </div>
        <div className="ear">
          <div className="lobe"></div>
        </div>
      </div>
      <div className="face">
        <div className="eyes">
          <div className="eye">
            <div className="eyelid"></div>
          </div>
          <div className="eye">
            <div className="eyelid"></div>
          </div>
        </div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
    </div>
    <div className="chest">
      <div className="fur">
        <div className="patch"></div>
      </div>
      <div className="fur">
        <div className="patch"></div>
      </div>
      <div className="fur">
        <div className="patch"></div>
      </div>
    </div>
    <div className="legs">
      <div className="leg">
        <div className="inner-leg"></div>
      </div>
      <div className="leg">
        <div className="inner-leg"></div>
      </div>
      <div className="leg">
        <div className="inner-leg"></div>
      </div>
      <div className="leg">
        <div className="inner-leg"></div>
      </div>
    </div>
    <div className="tail">
      <div className="tail">
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail -end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>,

<div className="dex" key="">
  <div className="heading"><div className="pokeball"></div><span>133</span><strong>Eevee</strong></div>
  <div className="info"><strong>Seen:</strong> 33</div>
  <div className="info"><strong>Caught:</strong> 33</div>
  <br />
  <div className="info"><strong>Weight:</strong> 6.5kg</div>
  <div className="info"><strong>Height:</strong> 0.3m</div>
  <br />
  <div className="info"><strong>Type:</strong> Normal</div>
  <div className="subheading">Evolution Pokemon</div>
  <p>Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.</p>
  <div className="subheading">Made by David Khourshid</div>
</div>]

  );
}

export default App;
