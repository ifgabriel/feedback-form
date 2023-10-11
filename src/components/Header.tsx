import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex justify-between bg-white py-6 px-20 h-20">
    <h1 className="text-yellow-500 font-bold text-2xl">FeedbackTrack</h1>
    <div className="flex gap-6">
      <Link to="/form" className="text-slate-900 hover:underline">Formulário</Link>
      <Link to="/" className="text-slate-900 hover:underline">Feedbacks</Link>
    </div>
  </header>
);

export default Header;
