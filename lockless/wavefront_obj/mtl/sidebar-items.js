initSidebarItems({"enum":[["Illumination","How a given material is supposed to be illuminated."]],"fn":[["parse","Parses a wavefront `.mtl` file, returning either the successfully parsed file, or an error. Support in this parser for the full file format is best-effort and realistically I will only end up supporting the subset of the file format which falls under the \"shit I see exported from blender\" category."]],"struct":[["Color",""],["Material","A single material that can be applied to any face. They are generally applied by using the Phong shading model."],["MtlSet","A set of materials in one `.mtl` file."],["ParseError","A parsing error, with location information."]]});