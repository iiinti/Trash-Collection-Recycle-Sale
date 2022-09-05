const mongoose = require('mongoose')

const Schema = mongoose.Schema

const procurementSchema = new Schema({
    drive: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Drive',
    },
    drive_number: {
        type: String,
        required: true,
    },
    account_id: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    material_types: {
        type: String,
        required: true,
    },
    payment: {
        type: Number,
        required: true,
    },
    input_amount: {
        type: Number,
        required: true
    },
    pp_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    ld_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    poly_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    hdpe_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    pet_weight: {
        white_weight: {
            fresh: {
                type: Number,
                required: true
            },
            dirty: {
                type: Number,
                required: true
            }
        },
        green_weight: {
            fresh: {
                type: Number,
                required: true
            },
            dirty: {
                type: Number,
                required: true
            }
        },
        brown_weight: {
            fresh: {
                type: Number,
                required: true
            },
            dirty: {
                type: Number,
                required: true
            }
        }
    },
    tin_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    cardboard_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    glass_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    paper_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    can_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    cloth_bag_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    iron_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    black_hdpe_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    one_time_cup_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    paper_packet_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    shredded_paper_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    },
    hard_hdpe_weight: {
        fresh: {
            type: Number,
            required: true
        },
        dirty: {
            type: Number,
            required: true
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Procurement', procurementSchema)