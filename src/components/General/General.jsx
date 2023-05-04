import './General.css';

function General() {
  return (
    <div class="header">
      <div class="header_center">
        <a class="header_logo">CampusLink</a>
		    <div class="header_search">
          {<img  src="/Search.svg" alt="Search" title="Search" className="Search" />}
		    </div>
		    <div class="header_menu">
          {<img  src="/menu.svg" alt="menu" title="menu" className="Menu" />}
		    </div>
		    <a href="Profile.html" class="header_profile">
          {<img  src="/Profile.svg" alt="Profile" title="Profile" className="Profile" />}
		    </a>
		    <div class="header_messenger">
          {<img  src="/Messenger.svg" alt="Messenger" title="Messenger" className="Messenger" />}
		    </div>
      </div>
	  </div>
  );
}

export default General;
