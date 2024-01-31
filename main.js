// start

let TheInput = document.querySelector( ".get-repos input" );
let getButton = document.querySelector( ".get-button" );
let reposData = document.querySelector( ".show-data" );

let div = document.createElement( "div" );
getButton.onclick = function() {
  getRepos``;
};

function
  getRepos () {
  if ( TheInput.value == "" ) {
    reposData.innerHTML = "Write The Repo URL Please".style.backgroundColor = "red";
  } else {
    fetch( `https://api.github.com/users/${ TheInput.value}/repos` ).then( //https://api.github.com/users/${TheInput.value}/repos
      ( res ) => res.json`` )
      .then( ( repos ) => {
        reposData.innerHTML = "";
        repos.forEach( repo => {
          let mainDiv = document.createElement( "div" );
          let repoName = document.createTextNode( repo.name );
          mainDiv.appendChild( repoName );
          let theURL = document.createElement( "a" );
          let theURLtext = document.createTextNode( "visit" );
          theURL.appendChild( theURLtext );
          theURL.href = `https://github.com/${ TheInput.value }/${ repo.name }`;
          theURL.setAttribute( "target", "_blank" );
          mainDiv.appendChild( theURL );
          let StarsSpan = document.createElement( "span" );
          let starsText = document.createTextNode( `Stars ${ repo.stargazers_count }` );
          StarsSpan.appendChild( starsText );
          mainDiv.appendChild( StarsSpan );
          mainDiv.className = "repo-box";
          reposData.appendChild( mainDiv );
        } );
      }
      );
  }
}
// the end