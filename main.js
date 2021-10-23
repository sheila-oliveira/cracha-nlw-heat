   const LinksSocialMedia = {  
       github :'sheila-oliveira',
       youtube :'she oli',
       facebook :'Sheila Oliveira',
       instagram :'sheilla_olliveira',
       twitter:'sheila'

  }
 
     /* function changeSocialMediaLinks() {
       document.getElementById("userName"). 
       textContent = 'olivia'- 

       esse comando faz o name do h1 mudar
        }*/
       
    
      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
         const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
         
         //faz a conte do outube do mak brito mudar para minha conta


        //alert(li.children[0].href)  //pega o a do li que é o filho na pocição 0 e pega o href desse filho e da um alert no conteudo
        }
        
      }
      changeSocialMediaLinks()

     

 
      function getGitHubProfileInfos() {
         const url = `https://api.github.com/users/${LinksSocialMedia.github}`
     
        
         fetch(url)
         .then(response => response.json())
         .then(data => {
           userName.textContent = data.name   //troca o nome ddo mak pelo meu.
           userBio.textContent = data.bio  //troca a  bio do antiga pela minha
           userLink.href = data.html_url

           userimage.src = data.avatar_url
           userLogin.textContent = data.login


         })
      }
     
      getGitHubProfileInfos()
     