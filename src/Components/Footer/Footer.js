import React from 'react'

const Footer = () => {
  return (
    <div className="footer mt-auto py-3 bg-primary text-center ">
    <span className='mx-auto me-5'>
    The Generics
    </span><button type="button" class="btn text-white bg-dark me-2"><a href='https://www.youtube.com'>YouTube</a>
        <i class="fab fa-youtube"></i>
        </button><button type="button" class="btn text-white bg-dark me-2">facebook<a href='https://www.facebook.com'></a>
        <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn text-white bg-dark me-2">Spotify<a href='https://www.spotify.com'></a>
        <i class="fab fa-facebook-f"></i>
        </button>
</div>
  )
}

export default Footer;