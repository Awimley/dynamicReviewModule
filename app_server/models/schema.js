var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema
                
                ({
                    reviewText: String,
                    rating: Number
                  }, 
                  {strict: false
                });


var profileSchema = new mongoose.Schema
                
                (
                  {
                    reviewText: String,
                    rating: Number,
                    pros: [String],
                    cons: [String]
                  }, 
                  {strict: false}
                );

var vendorSchema = new mongoose.Schema
              
              ({
                name: String,
                profile: String,
                products: [productSchema]
              })
mongoose.model('Vendor', vendorSchema);

var formSchema = new mongoose.Schema

                ({
                    cat: {type: String, unique: true},
                    text: Array,
                    rtf: Array,
                    check: Object,
                    select: Object
                }, {strict: false}); 

mongoose.model('Forms', formSchema);

var employeeSchema = new mongoose.Schema

              ({
                name: String,
                job: String,
                qualifying: [String],
                knowledge: [Schema.Types.ObjectId],
                reviews: [Schema.Types.ObjectId]
              });
mongoose.model('Employee', employeeSchema);

var productSchema = new mongoose.Schema

              ({
                name: String,
                type: [Schema.Types.ObjectId],
                vendor: Schema.Types.ObjectId
                category: [Schema.Types.ObjectId],
                internal_review: [reviewSchema],
                external_review: [reviewSchema],
                user_review: [reviewSchema],
                profile: profileSchema,
                detailed_review: [reviewSchema],
                pricing: {
                  method: Schema.Types.ObjectId,
                  rate: String
                  }
              });

mongoose.model('Products', productSchema);

var userSchema = new mongoose.Schema

            ({
              name: String,
              email: String,
              password: String,
              metaData: {},
              reviews: [Schema.Types.ObjectId]
            });

mongoose.model('Users', userSchema);

var typeSchema = new mongoose.Schema

            ({
              name: String,
              description: String,
              templates: [Schema.Types.ObjectId]
            });

mongoose.model('Types', typeSchema);

var pricingSchema = new mongoose.Schema

            ({
              method: String, 
              metaData: {},
              products: [ObjectId]
            });

mongoose.model('Pricing', pricingSchema);

var categorySchema = new mongoose.Schema
            
            ({
              name: String,
              description: String,
              templates: [Schema.Types.ObjectId]
            });

mongoose.model('Category', categorySchema);