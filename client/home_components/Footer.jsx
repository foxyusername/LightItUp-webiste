import React from 'react'
import "../css/footer.css";

function Footer({Desktop}) {

   const year=new Date().getFullYear();


  return <div className='footer'>
    <div className='footer_section'>

   <div className='all_content'>
   <div className='email_phone'>
   <div className='email'>
   <img alt='Gmail logo' src='https://s3-alpha-sig.figma.com/img/cf69/9c8f/f6e4b4f92be0e384313b7064df263ed5?Expires=1691971200&Signature=puVQgF4sCdx2D2iLvrbwrz0HXRIa-rOYcN0~vNAVTElt~rwhLj~kWu2pM6OVDYaOaIEAOICYsJ2nGqBlmz5FEm9L0dRx1QgKX6pkwh08xAwSSTUnscIA7YJDEvGpHmYmxzuVe9aIA8-cAlqS6OOep3I75OaqBltnm~mnWO7xsNp8wnX8RXzrYO-c8~WtpMiIRwfomnrBlfnQeS3eFPv-5oIDVhfZTTXoRvuQqp9NDRiWbB2jVdVWw-3FhfKajnbLH9PmyGS-hHIel0EmfYZ6qgIDepnZWZ6-5UStTknbZqGcYk76PMfxafEkckaEdhirAF02cF9irm3we7Ir7LTA7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
    <span>jamaspishvilinika@icloud.com</span>
   </div>
   <div className='phone'>
   <img alt='Phone logo' src='https://s3-alpha-sig.figma.com/img/e17b/02fb/12dad5a638c2e6995289a064200e3932?Expires=1691971200&Signature=ijhVt8aGKo-nqqmnC-sGLMUPe4UvipjrqfZCytw5QtoO4g34ZxMrmUnjXM1OaCRJiZsNVBNUrrRKH25cTmJpF1hg-8eBRlnQJBYAghlMw4Iob9AC3AVcyi1IgLWxit8WfOdtx-4Y6CncNfJyd9OtCA7Yf1kZoGVXnZ-~3gOiBr1pX6GDiKPJK~Npc-i9phxsRoF-PoZU0HZZ5-AyNBU8hdtgD1SHD8tdxKiRvU~-3Tu~7NEktTRcfHLYllcFkxXTbsnM8oOsUlsejKRtlAIjXCJU0IgjngLHwgBVbSsYzlZ7UaetLh~Um8yNBEoHtRZ1Zs4aFutQ5rb~U9xRKEmlcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
    <span>591-19-13-12</span>
   </div>
   </div>
   
   <div className='social_media'>
    <span>Follow us on</span>
  <div className='icons'>
   <a href='https://twitter.com/NikaJama123'> <img alt='Twitter' src='https://s3-alpha-sig.figma.com/img/1613/7008/017f1d9ffb64a99f054cc985d737e8a0?Expires=1691971200&Signature=g4Zyt6qE~qIiaKPdgnEcvMjvG49W16TB8BACAtpcIf72pA~kd1uCP7c8c6XVbXCLnEga7ygL5NheExnHSX91w5~cv5f6eIGullMtI-anuV7T~Pe9bW8TjFUChm8LAQuliMv8NMNM-bRsy6zYvOD4wctgUGWLQfqrdO4wbBECl9UpdGQHH2Y7R-wKELtW6mGPVQAF0o1LHCF2xFilXTlRk2JP36ka05g7ESTo7J6vzNwsR2qSxFOH4vVfCwgO4AY9VrL~tre8LWqYfdwSXIQArvYshG8vhZRdzHZvWPGtetpKtdsb~2Hp~bhuqso7rlrs8iB8CNoBOSQKizDjJKirtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' /> </a>
    <a href='https://www.instagram.com/nika_jamaspishvili/'><img alt='Instagram' src='https://s3-alpha-sig.figma.com/img/d7d7/08ea/e8cddf21d4f670575f787124471d5df7?Expires=1691971200&Signature=oqeIQPy6NpfMDiPef66LKKTp2dHaWmr4l1Aj1DFY70eNuEKVLV0JQz4exfcliMDnfXTk7FupH-P8VXnDjsFcj4xOoSxSmaP6uZVxrDuovDsjv4bChfKv89eiky9~p498dwr63FwqXn5g4DTqQ~t0VDTD~NfYdnYUrYmccF4rPtatC27pXWPT0Uo5wETaHI-RbSvGZctwYy-c-VAWJ9aWmB4p810jDX~toguCSYnkvqItUMOlR~x16MiXDCEaTO4LHjGxH973WLSKi~tZbxkPyyvBjf5gt~0B5wiiDgRiJ0VJSBvpZsXun-goWlVpMs0VwRkpplTNcb~--rfTtyo-QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' /> </a>
    <a href='https://www.facebook.com/profile.php?id=100013425753100'><img alt='Facebook' src='https://s3-alpha-sig.figma.com/img/8947/06b6/c7cb92fcd039f24194137e2f7947239a?Expires=1691971200&Signature=FGwC0WOfu9KNfyMtOOYslpkCOEuVpLSNc5FcolYeEPNS7NdZJBBfZlAIX~2OpE1h92PkHvIaGzQMRHVjvN2q6H6bYtxohxWJFmzKC91xqsApeKvLeIzP93wBC0TsHfgimLGz-~xelb8PFXpqRHL0an7dGmQ9IomRKKXQVSCnTN66cHIs5FV8pXcZvt70tgT8NR48SMtBKR6gcgU8Fauv22dAQJRKebHXlMI3Fws2NJGHYPKLk48k9w1xmfWrEYn7DJ65XghCwjCxhndAfBoAPW~yjWaBDCvRf0EeulGQkVeFDv2auzg4hzzR9O2tZFTmLadRgMZj2l9uPDzBCWtRWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' /> </a>
   </div>
   </div>
   </div>
<div className='copyright'>
  <p>LightItUp©{year}. All rights reserved</p>
</div>
    </div>

    </div>
}

export default Footer