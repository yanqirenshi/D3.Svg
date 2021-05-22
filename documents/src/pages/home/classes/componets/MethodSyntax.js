import React from 'react';

export default function MethodSyntax (props) {
    return (
        <div style={{display: 'flex'}}>
          <p style={{fontWeight: 800}}>{props.name}</p>

          {props.args && props.args.length>0 &&
           <p style={{marginLeft:11, fontStyle: 'oblique'}}>
             {props.args.map((d,i) => {
                 return <span key={i} style={i===0 ? null : {marginLeft:11}}>
                                      {d}
                                    </span>;
             })}
           </p>}

          <p style={{marginLeft:11}}>⇒</p>

          <p style={{marginLeft:11, fontStyle: 'oblique'}}>
            {props.ret || "NULL"}
          </p>
        </div>
    );
}
