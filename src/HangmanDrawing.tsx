const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: 50,
        right: -30
    }}/>
)

const BODY = (
    <div style={{ 
        height:'100px', 
        width: '10px',
        position: 'absolute',
        top: 110,
        right: 0,
        background: 'black'
    }}
    />
)

const RIGHT_ARM = (
    <div 
    style={{
        height:'90px', 
        width: '10px',
        position: 'absolute',
        top: 90,
        right: -30,
        rotate: '45deg',
        background: 'black'
    }}/>
)

const LEFT_ARM = (
    <div 
    style={{
        height:'90px', 
        width: '10px',
        position: 'absolute',
        top: 90,
        right: 30,
        rotate: '-45deg',
        background: 'black'
    }}/>
)

const RIGHT_LEG = (
    <div 
    style={{
        height:'90px', 
        width: '10px',
        position: 'absolute',
        top: 200,
        right: -20,
        rotate: '155deg',
        background: 'black'
    }}/>
)

const LEFT_LEG = (
    <div 
    style={{
        height:'90px', 
        width: '10px',
        position: 'absolute',
        top: 200,
        right: 20,
        rotate: '-155deg',
        background: 'black'
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses : number
}

export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    return (
    <div
    style={{
    position: 'relative'
    }}
    >
       {BODY_PARTS.slice(0, numberOfGuesses)}
       
         <div style={{ 
            height:'10px', 
            width: '200px',
            marginLeft: '100px',
            background: 'black'
        }}
        />
        <div style={{ 
            position: 'absolute',
            height:'50px', 
            width: '10px',
            top: 0,
            right: 0,
            background: 'black'
        }}
        />
        <div style={{
            height: '400px', 
            width: '10px', 
            background: 'black', 
            marginLeft: '100px'
        }}
        />
        <div style={{ 
            height:'10px', 
            width: '200px', 
            background: 'black'
        }}
        />
    </div>
    )
}