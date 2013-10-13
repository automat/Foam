attribute vec3 aVertexPosition;
attribute vec4 aVertexColor;
attribute vec2 aVertexTexCoord;

varying vec4 vVertexPosition;
varying vec4 vVertexColor;
varying vec2 vVertexTexCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

uniform float uPointSize;

void main(void)
{
    vVertexPosition = uModelViewMatrix * vec4(aVertexPosition, 1.0);
    vVertexColor    = aVertexColor;
    vVertexTexCoord = aVertexTexCoord;

    gl_Position  = uProjectionMatrix * vVertexPosition;
    gl_PointSize = uPointSize;
}