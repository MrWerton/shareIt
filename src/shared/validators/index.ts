export class InputTextValidator{
    static validate(element: HTMLInputElement ){
        const value = element.value;
        if(value === null || value!.trim() === ''){
            element.nextElementSibling!.textContent = 'Not should be empty.';
            return false;
        }else{   
            element.nextElementSibling!.textContent = '';
            return true;
        }

        
    }

    
}