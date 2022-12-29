import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div>
        <Link legacyBehavior href={'/'}>
          <Image
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="Medium Logo"
            height={40}
            width={100}
          />
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
