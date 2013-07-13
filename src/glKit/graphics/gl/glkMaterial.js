GLKit.Material = function(ambient,diffuse,specular,shininess)
{
    ambient   = ambient || GLKit.Color.make(1.0,0.5,0.5,1.0);
    diffuse   = diffuse || GLKit.Color.BLACK();
    specular  = specular || GLKit.Color.BLACK();
    shininess = shininess || 1.0;

    this.ambient   = ambient;
    this.diffuse   = diffuse;
    this.specular  = specular;
    this._shininess = shininess;
};

GLKit.Material.prototype.setAmbient   = function(color)  {this.ambient = color;};
GLKit.Material.prototype.setAmbient3f = function(r,g,b)  {this.ambient[0] = r;this.ambient[1] = g;this.ambient[2] = b;};
GLKit.Material.prototype.setAmbient4f = function(r,g,b,a){this.ambient[0] = r;this.ambient[1] = g;this.ambient[2] = b;this.ambient[3] = a;};

GLKit.Material.prototype.setDiffuse   = function(color)  {this.diffuse = color;};
GLKit.Material.prototype.setDiffuse3f = function(r,g,b)  {this.diffuse[0] = r;this.diffuse[1] = g;this.diffuse[2] = b;};
GLKit.Material.prototype.setDiffuse4f = function(r,g,b,a){this.diffuse[0] = r;this.diffuse[1] = g;this.diffuse[2] = b;this.diffuse[3] = a;};

GLKit.Material.prototype.setSpecular   = function(color)  {this.specular = color;};
GLKit.Material.prototype.setSpecular3f = function(r,g,b)  {this.specular[0] = r;this.specular[1] = g;this.specular[2] = b;};
GLKit.Material.prototype.setSpecular4f = function(r,g,b,a){this.specular[0] = r;this.specular[1] = g;this.specular[2] = b;this.specular[3] = a;};

GLKit.Material.prototype.setShininess  = function(shininess){this._shininess = shininess};

GLKit.Material.prototype.getAmbient   = function(){return GLKit.Color.copy(this.ambient);};
GLKit.Material.prototype.getDiffuse   = function(){return GLKit.Color.copy(this.diffuse);};
GLKit.Material.prototype.getSpecular  = function(){return GLKit.Color.copy(this.specular);};
GLKit.Material.prototype.getShininess = function(){return this._shininess;};