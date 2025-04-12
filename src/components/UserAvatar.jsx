export default function UserAvatar({ avatarImg = "assets/images/image-avatar.png" }){
  return(
    <a
      href="#"
      className="w-9 h-9 rounded-full border-2 border-solid border-transparent hover:border-orange transition-colors duration-300"
      aria-label="Go to your profile"
    >
      <img src={avatarImg} alt="Your profile avatar" />
    </a>
  )
}