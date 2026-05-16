export default function Home() {

  return (

    <main style={{

      background:'#0b0b0b',

      color:'white',

      minHeight:'100vh',

      fontFamily:'Arial',

      padding:'80px'

    }}>

      <h1 style={{fontSize:'64px'}}>

        Nejlevnější byt 4KK v Brno-město

      </h1>

      <p style={{

        fontSize:'24px',

        maxWidth:'900px',

        lineHeight:'1.7',

        color:'#d1d1d1'

      }}>

        Luxusní městské bydlení s investičním potenciálem.

      </p>

      <div style={{marginTop:'40px'}}>

        <a

          href="tel:+420773649203"

          style={{

            background:'white',

            color:'black',

            padding:'18px 28px',

            borderRadius:'40px',

            textDecoration:'none',

            marginRight:'20px',

            fontWeight:'bold'

          }}

        >

          Zavolat makléři

        </a>

        <a

          href="mailto:filip.korcak@bcas.cz"

          style={{

            border:'1px solid white',

            color:'white',

            padding:'18px 28px',

            borderRadius:'40px',

            textDecoration:'none'

          }}

        >

          Napsat e-mail

        </a>

      </div>

    </main>

  )

}
