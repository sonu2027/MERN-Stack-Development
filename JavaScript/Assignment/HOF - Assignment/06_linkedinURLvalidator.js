/*6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not. */

let url="https://www.linkedin.com/in/kapil-rijhwani/"
let regexArr=[/\/\//g, /https:/g, /www.linkedin.com\/in\/\w+/g, /-/g, /\w+/g]
let count=0
for(let i=0; i<regexArr.length; i++){
    let x=regexArr[i].test(url)
    if(x==false){
        count=1
    }
}
url=Array.from(url)
length=url.length-1

if(url[length]!="/"  || count==1){
    console.log(false);
}
else{
    console.log(true);
}