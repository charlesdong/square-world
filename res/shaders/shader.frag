#version 330 core

in vec2 tex_coord;

out vec4 color;

uniform sampler2D tex;
//uniform vec3 sprite_color;

void main()
{
    color = texture(tex, tex_coord);
}