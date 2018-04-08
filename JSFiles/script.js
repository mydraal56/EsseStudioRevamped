var mobileMenuBar = function() { 
    if(screen.width <= 500)
    {
        if(document.getElementById("navbar").style.display == 'none')
            document.getElementById("navbar").style.display = 'block';
        else
            document.getElementById("navbar").style.display = 'none';
    }
    else
        document.getElementById("navbar").style.display = 'inline-block';
                
        
}