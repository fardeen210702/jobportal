export function isNullOrEmpty(element){
    if(element == null) return true;
    if(element instanceof Array && element.length == 0) return true;
    if(element instanceof String && element.length == 0) return true;
    return false;
}