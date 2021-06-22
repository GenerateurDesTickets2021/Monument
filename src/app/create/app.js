fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    affiche(data);
    
})
function showDetail2(title,isbn,thumbnailUrl,categories,publishedDate,authors,status,pageCount) {
    const tech={
      "title": title,
      "isbn": isbn,
      "pageCount": pageCount,
      "publishedDate": publishedDate,
      "thumbnailUrl": thumbnailUrl,
      "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
      "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
      "status": status,
      "authors": authors,
      "categories": categories
     }
    nav2.push('nav-detail3', { tech });
  }
  
function detailvr(title,isbn,thumbnailUrl,categories,publishedDate,authors,status,pageCount){
    const l={
        "title": title,
        "isbn": isbn,
        "pageCount": pageCount,
        "publishedDate": publishedDate,
        "thumbnailUrl": thumbnailUrl,
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
        "status": status,
        "authors": authors,
        "categories": categories
       }
    nav1.push('detail-livre',{ l });
}
function showListe(ind) {
    //console.log(fil[ind]);
    //ind=fil[ind];
    nav2.push('nav-detail2', { ind}); 
  }
function affiche(data){
    customElements.define('list-livre', class NavHome extends HTMLElement {
        connectedCallback() {
            this.innerHTML=`<ion-content fullscreen class="ion-padding">
            <ion-list>
            ${data.map((l)=>`
            <ion-card>
            <ion-item button  onclick="detailvr('${l.title}','${l.isbn}','${l.thumbnailUrl}','${l.categories}','${l.publishedDate}','${l.authors}','${l.status}','${l.pageCount}')">
            <img width="100" src=${l.thumbnailUrl}>
            <ion-label>
                <h2><strong>${l.title}</strong></h2>
                <h3><i>auteur: ${l.authors}</i></h3>
                <p>categories : ${l.categories}</p>
                <p>statut: ${l.status}</p>
              </ion-label>
            </ion-item>
            </ion-card>`
               
            )}  </ion-list>
            </ion-content>
          `;
           
        }
    })
    customElements.define('detail-livre', class Detail extends HTMLElement {
        connectedCallback() {
            this.innerHTML=`
            <ion-header translucent >
            <ion-toolbar color='dark'">
              <ion-buttons>
                <ion-back-button text="tous" defaultHref="/"></ion-back-button>
              </ion-buttons>
             
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen class="ion-padding">
          <center>
          <img width="150" height="200" src="${this.l.thumbnailUrl}">
       </center>
          <ion-card>
             <center>    
             <ion-header>
             <ion-card-title>${this.l.title}</ion-card-title>
                  <ion-card-subtitle>${this.l.authors} ,${this.l.pageCount}pages </ion-card-subtitle>
                
              </ion-card-header>
              </center>
              <ion-card-content>
                  ${this.l.longDescription}
              </ion-card-content>
          </ion-card>
          </ion-content>`
        }
    })

    customElements.define('list-categorie', class NavHome extends HTMLElement {
        connectedCallback() {
        const categorie = [];
        const c = [];
        categorie.push(data.map(cat => cat.categories));
      
      for(var i = 0; i<categorie[0].length;i++){
          for(var j = 0; j<categorie[0][i].length;j++)
              c.push(categorie[0][i][j])
      } 
    
      
      var unique = c.filter((v, i, a) => a.indexOf(v) === i); 

      
      
      this.innerHTML = `
      <ion-content fullscreen class="ion-padding">
      <ion-list>
          ${unique.map((tech, index) =>  `
          <ion-card>
          <ion-item button  onclick="showListe(${index})">
          <ion-label>
            <h2><strong>${tech}</strong></h2>
            </ion-label>
              </ion-item>
              </ion-card>
          `).join('\n')}
          </ion-list>
        </ion-content>
      `;
           
        }
    })
    customElements.define('nav-detail2', class NavHome extends HTMLElement {
  
        connectedCallback() {
          const category = [];
          const c = [];
          const fil = [];
          category.push(data.map(cat => cat.categories));
          //console.log(category);
          for(var i = 0; i<category[0].length;i++){
              for(var j = 0; j<category[0][i].length;j++)
                  c.push(category[0][i][j])
          } 
          //console.log(c); 
          
          var unique = c.filter((v, i, a) => a.indexOf(v) === i); 
          //console.log(unique);
          
          for (var k = 0; k<unique.length;k++){
              var tri = data.filter(cat => unique[k] == cat.categories[0] ||  unique[k] == cat.categories[1]);
              //console.log(c[k]);
              //console.log(tri);
              fil.push(tri);
          }
          this.innerHTML = `
          <ion-header translucent >
              <ion-toolbar color='dark' style="--min-height:1cm;">
                <ion-buttons >
                  <ion-back-button text="Tous" defaultHref="/"></ion-back-button>
                </ion-buttons>
                </ion-toolbar>
          </ion-header> 
          <ion-content fullscreen class="ion-padding">
          <ion-list>
              ${fil[this.ind].map(t =>  `
              <ion-card>
                  <ion-item button onclick="showDetail2('${data.find(techh => techh.title == t.title).title}','${data.find(techh => techh.title == t.title).isbn}','${data.find(techh => techh.title == t.title).thumbnailUrl}','${data.find(techh => techh.title == t.title).categories}','${data.find(techh => techh.title == t.title).publishedDate}','${data.find(techh => techh.title == t.title).authors}','${data.find(techh => techh.title == t.title).status}','${data.find(techh => techh.title == t.title).pageCount}')">
                  <img slot="start" width="100" src="${t.thumbnailUrl}">
                  <ion-label>
                    <h2><strong>${t.title}</strong></h2>
                    <h3><i>${t.authors}</i></h3>
                    <p>${t.categories}</p>
                    <p>statut: ${t.status}</p>
                  </ion-label>
                  </ion-item>
                  </ion-card>
              `).join('\n')}
              </ion-list>
            </ion-content>
          `;
        }
      });
      customElements.define('nav-detail3', class NavDetail extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
            <ion-header translucent >
              <ion-toolbar color='dark'">
                <ion-buttons>
                  <ion-back-button text="tous" defaultHref="/"></ion-back-button>
                </ion-buttons>
               
              </ion-toolbar>
            </ion-header>
            <ion-content fullscreen class="ion-padding">
            <center>
            <img width="150" height="200" src="${this.tech.thumbnailUrl}">
         </center>
           
               <center>    
               <ion-header>
               <ion-card-title>${this.tech.title}</ion-card-title>
                    <ion-card-subtitle> ${this.tech.authors} 
                    ,${this.tech.pageCount}pages </ion-card-subtitle>
                   
                </ion-header>
                </center>
                <ion-card-content>
                    ${this.tech.longDescription}
                </ion-card-content>
            
            </ion-content>
          `;
        }})
}

      